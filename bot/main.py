import telegram
from telegram.ext import Updater, CommandHandler, MessageHandler, filters, CallbackQueryHandler
import config.settings

def start(update, context):
    update.message.reply_text("سلام! من یک ربات برای اضافه کردن محصول به سایت وردپرسی شما هستم.")

def photo_handler(update, context):
    user_data = context.user_data
    if 'photos' not in user_data:
        user_data['photos'] = []

    photo_file = update.message.photo[-1].get_file()
    user_data['photos'].append(photo_file)

    if update.message.caption:
        caption = update.message.caption
        try:
            lines = caption.split('\n')
            name = lines[0]
            price = lines[1]
            description = '\n'.join(lines[2:])

            user_data['product_info'] = {
                'name': name,
                'price': price,
                'description': description
            }
            update.message.reply_text("اطلاعات محصول با موفقیت دریافت شد. لطفاً دسته بندی محصول را انتخاب کنید:")

            from wordpress.api import WordPressAPI
            from config import settings

            api = WordPressAPI(settings.WORDPRESS_URL, settings.WORDPRESS_USERNAME, settings.WORDPRESS_PASSWORD)
            categories = api.get_categories()

            keyboard = []
            for category in categories:
                keyboard.append([telegram.InlineKeyboardButton(category['name'], callback_data=category['id'])])

            reply_markup = telegram.InlineKeyboardMarkup(keyboard)
            update.message.reply_text('لطفاً یک دسته بندی را انتخاب کنید:', reply_markup=reply_markup)

        except IndexError:
            update.message.reply_text("فرمت کپشن صحیح نیست. لطفاً اطلاعات را در سه خط جداگانه (نام، قیمت، توضیحات) وارد کنید.")
    else:
        update.message.reply_text("عکس شما دریافت شد. اگر عکس دیگری دارید، آن را نیز ارسال کنید. در غیر این صورت، اطلاعات محصول را در کپشن عکس آخر وارد کنید.")

def button(update, context):
    query = update.callback_query
    user_data = context.user_data
    user_data['category_id'] = query.data
    query.answer()
    query.edit_message_text(text=f"دسته بندی انتخاب شد. در حال ایجاد پیش نویس محصول...")

    product_info = user_data['product_info']
    photos = user_data['photos']
    category_id = user_data['category_id']

    from wordpress.api import WordPressAPI
    from config import settings

    api = WordPressAPI(settings.WORDPRESS_URL, settings.WORDPRESS_USERNAME, settings.WORDPRESS_PASSWORD)

    try:
        product = api.create_product(
            name=product_info['name'],
            price=product_info['price'],
            description=product_info['description'],
            category_id=category_id,
            images=photos
        )

        product_url = product['permalink']
        query.edit_message_text(text=f"پیش نویس محصول با موفقیت ایجاد شد. می توانید آن را در آدرس زیر مشاهده کنید:\n{product_url}")

    except Exception as e:
        query.edit_message_text(text=f"خطایی در هنگام ایجاد محصول رخ داد: {e}")

    # Clear user data
    context.user_data.clear()

def main():
    updater = Updater(config.settings.TELEGRAM_BOT_TOKEN, use_context=True)
    dp = updater.dispatcher
    dp.add_handler(CommandHandler("start", start))
    dp.add_handler(MessageHandler(filters.PHOTO, photo_handler, pass_user_data=True))
    dp.add_handler(CallbackQueryHandler(button, pass_user_data=True))
    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()
