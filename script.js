// script.js - نسخه با بازه تاریخ جدید و لیست کامل اقلام

// *** تغییر کلیدی: لیست کامل اقلام با کتیبه‌های جدید شما ***
const itemsData = [
    {
        id: "katibe1", name: "کتیبه یا حیدر...", image: "katibe1.jpg", // نام فایل عکس را چک کنید
        description: "کتیبه پارچه‌ای زیبا برای تزئین مراسم غدیر.", stock: 1, maxPerUser: 1
    },
    {
        id: "katibe2", name: "کتیبه کهکشان...", image: "katibe2.jpg", // نام فایل عکس را چک کنید
        description: "کتیبه با طرح ویژه غدیر، مناسب برای فضاسازی.", stock: 1, maxPerUser: 1
    },
    {
        id: "katibe3", name: "کتیبه گل گلها..", image: "katibe3.jpg", // نام فایل عکس را چک کنید
        description: "کتیبه عمودی با طراحی اسلامی برای جشن‌ها.", stock: 1, maxPerUser: 1
    },
    {
        id: "khodarashokrKatibe", name: "خداراشکر مولایم علی شد", image: "Khodarashokr.jpg", // نام فایل عکس را چک کنید
        description: "", stock: 1, maxPerUser: 1
    },
    {
        id: "katibeAbiHeydar", name: "فقط حیدر امیرالمومنین است", image: "KatibeAbi.jpg", // نام فایل عکس را چک کنید
        description: "", stock: 1, maxPerUser: 1
    },
    {
        id: "katibeZardAmir", name: "امیرالمومنین", image: "Katibezard.jpg", // نام فایل عکس را چک کنید
        description: "", stock: 1, maxPerUser: 1
    },
    {
        id: "aliValAlahKatibe", name: "علی ولی الله", image: "AliValAlah.jpg", // نام فایل عکس را چک کنید
        description: "", stock: 1, maxPerUser: 1
    },
    {
        id: "yaMortezaAliKatibe", name: "یا مرتضی علی", image: "YaMortezaAli.jpg", // نام فایل عکس را چک کنید
        description: "", stock: 1, maxPerUser: 1
    },
    {
        id: "payenor", name: "پایه نور", image: "payenor.jpg",
        description: "پایه فلزی تلسکوپی برای نصب تجهیزات نورپردازی و دکور.", stock: 8, maxPerUser: 3
    },
    {
        id: "lamp100w", name: "لامپ 100 وات (پروژکتور)", image: "100w.jpg",
        description: "پروژکتور LED قدرتمند 100 واتی برای روشنایی وسیع.", stock: 12, maxPerUser: 4
    },
    {
        id: "rgbLight", name: "چراغ RGB (پارس لایت)", image: "RGB.jpg", // نام فایل عکس را چک کنید
        description: "چراغ رنگی RGB با قابلیت تغییر رنگ برای افکت‌های نوری.", stock: 8, maxPerUser: 3
    },
    {
        id: "fabricBanner", name: "ریسه رنگی پارچه‌ای (بنر)", image: "reseparche.jpg", // نام فایل عکس را چک کنید
        description: "ریسه پارچه‌ای رنگارنگ و زیبا برای تزئین محیط جشن.", stock: 20, maxPerUser: 6
    },
    {
        id: "pallet", name: "پالت پلاستیکی", image: "palet.jpg", // نام فایل عکس را چک کنید
        description: "پالت پلاستیکی محکم برای قرار دادن وسایل یا ایجاد سن.", stock: 16, maxPerUser: 16
    },
    {
        id: "ledStringWarm", name: "ریسه LED (آفتابی)", image: "rese.led.jpg", // نام فایل عکس را چک کنید
        description: "ریسه LED با نور گرم آفتابی برای ایجاد فضایی دنج.", stock: 10, maxPerUser: 3
    },
    {
        id: "stapleGun", name: "منگنه کوب دیواری", image: "manganekob.jpg", // نام فایل عکس را چک کنید
        description: "منگنه کوب دستی برای نصب بنر (بدون خشاب منگنه).", stock: 4, maxPerUser: 1
    },
    {
        id: "waterCooler30L", name: "کلمن بزرگ 30 لیتری", image: "kolman.jpg", // نام فایل عکس را چک کنید
        description: "کلمن آب بزرگ با ظرفیت 30 لیتر، مناسب پذیرایی.", stock: 3, maxPerUser: 1
    },
    {
        id: "balloonPumpElectric", name: "بادکنک باد کن برقی", image: "badkonakbadkon.jpg",
        description: "پمپ برقی برای باد کردن سریع و آسان بادکنک‌ها.", stock: 4, maxPerUser: 1
    },
    {
        id: "cupHolderTray", name: "سینی جا لیوانی", image: "sini.webp", // نام فایل عکس را چک کنید
        description: "سینی پلاستیکی با جای مخصوص برای قرار دادن لیوان‌ها.", stock: 12, maxPerUser: 4
    },
    {
        id: "bingoSpinner", name: "گردونه شانس بینگو (کوچک)", image: "bingo.jpg", // نام فایل عکس را چک کنید
        description: "گردونه کوچک برای قرعه‌کشی و بازی‌های سرگرم‌کننده.", stock: 1, maxPerUser: 1
    },
    {
        id: "projectorAndScreen", name: "پروژکتور و پرده نمایش", image: "data.jpeg", // نام فایل عکس را چک کنید
        description: "مجموعه پروژکتور به همراه پرده نمایش برای ارائه محتوا.", stock: 1, maxPerUser: 1
    },
    {
        id: "clipboard", name: "تخته شاسی (A4)", image: "shasi.jpg", // نام فایل عکس را چک کنید
        description: "تخته شاسی چوبی برای استفاده مجری، گروه سرود (A4).", stock: 10, maxPerUser: 3
    },
    {
        id: "powerStrip", name: "سه راهی برق (4 خانه)", image: "serah.webp", // نام فایل عکس را چک کنید
        description: "سه راهی برق با چهار پریز برای اتصال دستگاه‌های الکتریکی.", stock: 4, maxPerUser: 1
    },
    // کتیبه‌های جدید شما
    
    // پارچه‌ها
    {id: "fabricRed", name: "پارچه قرمز", color: "#EF231A", isColorSample: true, description: "پارچه قرمز رنگ (۸متر × ۳متر).", stock: 2, maxPerUser: 1},
    {id: "fabricYellow", name: "پارچه زرد", color: "#F3D80D", isColorSample: true, description: "پارچه زرد رنگ (۸متر × ۳متر).", stock: 2, maxPerUser: 1},
    {id: "fabricOrange", name: "پارچه نارنجی", color: "#EC4A02", isColorSample: true, description: "پارچه نارنجی رنگ (۸متر × ۳متر).", stock: 2, maxPerUser: 1},
    {id: "fabricVelvetGold", name: "پارچه مخمل طلایی", color: "#FFD988", isColorSample: true, description: "پارچه مخمل طلایی (۳متر × ۲متر).", stock: 1, maxPerUser: 1},
    {id: "fabricDeepPurple", name: "پارچه بنفش تیره", color: "#421330", isColorSample: true, description: "پارچه بنفش تیره (۸متر × ۳متر).", stock: 1, maxPerUser: 1},
    {id: "fabricOliveGreen", name: "پارچه سبز زیتونی", color: "#4B7923", isColorSample: true, description: "پارچه سبز زیتونی (۸متر × ۳متر).", stock: 1, maxPerUser: 1},
    {id: "fabricDarkGreen", name: "پارچه سبز یشمی", color: "#13200D", isColorSample: true, description: "پارچه سبز یشمی (۸متر × ۳متر).", stock: 1, maxPerUser: 1},
    {id: "fabricLavender", name: "پارچه یاسی", color: "#784CA4", isColorSample: true, description: "پارچه یاسی (۸متر × ۳متر).", stock: 1, maxPerUser: 1},
    {id: "fabricPlum", name: "پارچه بادمجانی", color: "#4C1952", isColorSample: true, description: "پارچه بادمجانی (۸متر × ۳متر).", stock: 1, maxPerUser: 1},
    {id: "fabricTeal", name: "پارچه آبی فیروزه‌ای", color: "#00ABB5", isColorSample: true, description: "پارچه آبی فیروزه‌ای (۸متر × ۳متر).", stock: 1, maxPerUser: 1},
    {id: "fabricWhite", name: "پارچه سفید", color: "#FDFDFD", isColorSample: true, description: "پارچه سفید (۸متر × ۳متر).", stock: 1, maxPerUser: 1},
    {id: "fabricLightYellow", name: "پارچه زرد روشن", color: "#F6F173", isColorSample: true, description: "پارچه زرد روشن (۸متر × ۳متر).", stock: 1, maxPerUser: 1},
    {id: "fabricCharcoal", name: "پارچه ذغالی", color: "#131C23", isColorSample: true, description: "پارچه ذغالی تیره (۸متر × ۳متر).", stock: 1, maxPerUser: 1},
    {id: "fabricSteelBlue", name: "پارچه آبی فولادی", color: "#5689AF", isColorSample: true, description: "پارچه آبی فولادی (۸متر × ۳متر).", stock: 1, maxPerUser: 1}
];

const GOOGLE_SHEET_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzYzU0xs1SHPVesgM0qljQne2fCy58cdiTRDjFPREdb4WyIUZoVwnhINpvvEa39BfNm/exec';

// DOM Elements
const welcomeContainer = document.getElementById('welcomeMessageContainer');
const appHeader = document.getElementById('appHeader');
const appMain = document.getElementById('appMain');
const btnAllItems = document.getElementById('btnAllItems');
const btnReserve = document.getElementById('btnReserve');
const btnFinalizeLogin = document.getElementById('btnFinalizeLogin');
const btnChangeDate = document.getElementById('btnChangeDate');
const allItemsView = document.getElementById('allItemsView');
const reserveView = document.getElementById('reserveView');
const finalizeFormView = document.getElementById('finalizeFormView');
const adminView = document.getElementById('adminView');
const allItemsGrid = allItemsView.querySelector('.items-grid');
const calendarContainer = document.getElementById('calendarContainer');
const calendarGrid = calendarContainer.querySelector('.calendar-grid');
const itemSelectionContainer = document.getElementById('itemSelectionContainer');
const reservationItemsGrid = itemSelectionContainer.querySelector('.reservation-items-grid');
const selectedDateDisplay = document.getElementById('selectedDateDisplay');
const dailyLimitMessage = document.getElementById('dailyLimitMessage');
const fullNameInput = document.getElementById('fullNameInput');
const phoneInput = document.getElementById('phoneInput');
const submitReservationBtn = document.getElementById('submitReservationBtn');
const formMessage = document.getElementById('formMessage');
const finalSelectedDate = document.getElementById('finalSelectedDate');
const finalSelectedItemsList = document.getElementById('finalSelectedItemsList');
const adminReservationsTableBody = document.getElementById('adminReservationsTable').querySelector('tbody');
const refreshAdminDataBtn = document.getElementById('refreshAdminData');

// App State
let currentView = 'allItems';
let selectedEventDate = null;
let currentCart = {};
let allReservations = [];
let dailyItemUsage = {};
let isFetchingReservations = false;
let isFetchingDailyUsage = false;

// --- Utility Functions ---
function showView(viewId) {
    document.querySelectorAll('.view-section').forEach(section => section.classList.add('hidden'));
    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.remove('hidden');
    }
    btnChangeDate.classList.add('hidden');
    if (viewId === 'reserveView' && selectedEventDate && itemSelectionContainer.style.display !== 'none' && !itemSelectionContainer.classList.contains('hidden')) {
        btnChangeDate.classList.remove('hidden');
    }
    currentView = viewId;
}

// --- Rendering Functions ---
function createItemCard(item, isForReservation = false, effectiveMaxForUserToday = item.maxPerUser) {
    const card = document.createElement('div');
    card.classList.add('item-card');
    card.dataset.itemId = item.id;

    let itemImageHtml = '';
    if (item.isColorSample) {
        itemImageHtml = `<div class="color-swatch" style="background-color: ${item.color};"></div>`;
    } else {
        // اطمینان از اینکه item.image وجود دارد
        itemImageHtml = `<img src="${item.image || 'placeholder.jpg'}" alt="${item.name}">`; // اگر عکس نبود، یک placeholder
    }

    let controlsHtml = '';
    // *** تغییر کلیدی: حذف نمایش item.description از کارت‌ها ***
    // let descriptionHtml = `<p>${item.description || ''}</p>`; // توضیحات دیگر نمایش داده نمی‌شود

    if (isForReservation) {
        // descriptionHtml = ''; // در حالت رزرو هم توضیحات نمایش داده نمی‌شود
        const quantityInCart = currentCart[item.id] || 0;
        const actualStockForDay = item.stock - (dailyItemUsage[item.id] || 0);

        if (effectiveMaxForUserToday > 0) {
            controlsHtml = `
                <div class="quantity-controls">
                    <button class="plus-btn" data-item-id="${item.id}" data-effective-max="${effectiveMaxForUserToday}">+</button>
                    <span class="quantity-display">${quantityInCart}</span>
                    <button class="minus-btn" data-item-id="${item.id}" ${quantityInCart === 0 ? 'disabled' : ''}>-</button>
                </div>
                <p class="item-availability">حداکثر قابل انتخاب: ${effectiveMaxForUserToday} (موجودی روز: ${actualStockForDay > 0 ? actualStockForDay : 0})</p>`;
        } else {
            controlsHtml = `<p class="item-unavailable">موجودی این قلم برای امروز تمام شده است.</p>`;
        }
    }

    card.innerHTML = `
        ${itemImageHtml}
        <h4>${item.name}</h4>
        ${controlsHtml} 
    `;
    // خط مربوط به descriptionHtml حذف شد
    return card;
}


function renderAllItems() {
    allItemsGrid.innerHTML = '';
    itemsData.forEach(item => {
        const card = createItemCard(item, false); // توضیحات در این حالت هم نمایش داده نمی‌شود
        allItemsGrid.appendChild(card);
    });
}

// *** تغییر کلیدی: به‌روزرسانی آرایه eventDates ***
const eventDates = [
    { day: 15, month: 'خرداد', year: 1403, iso: '2024-06-04', shamsi: '۱۴۰۳/۰۳/۱۵', dayName: 'سه‌شنبه' },
    { day: 16, month: 'خرداد', year: 1403, iso: '2024-06-05', shamsi: '۱۴۰۳/۰۳/۱۶', dayName: 'چهارشنبه' },
    { day: 17, month: 'خرداد', year: 1403, iso: '2024-06-06', shamsi: '۱۴۰۳/۰۳/۱۷', dayName: 'پنجشنبه' },
    { day: 18, month: 'خرداد', year: 1403, iso: '2024-06-07', shamsi: '۱۴۰۳/۰۳/۱۸', dayName: 'جمعه' },
    { day: 19, month: 'خرداد', year: 1403, iso: '2024-06-08', shamsi: '۱۴۰۳/۰۳/۱۹', dayName: 'شنبه' },
    { day: 20, month: 'خرداد', year: 1403, iso: '2024-06-09', shamsi: '۱۴۰۳/۰۳/۲۰', dayName: 'یکشنبه' },
    { day: 21, month: 'خرداد', year: 1403, iso: '2024-06-10', shamsi: '۱۴۰۳/۰۳/۲۱', dayName: 'دوشنبه' },
    { day: 22, month: 'خرداد', year: 1403, iso: '2024-06-11', shamsi: '۱۴۰۳/۰۳/۲۲', dayName: 'سه‌شنبه' },
    { day: 23, month: 'خرداد', year: 1403, iso: '2024-06-12', shamsi: '۱۴۰۳/۰۳/۲۳', dayName: 'چهارشنبه' },
    { day: 24, month: 'خرداد', year: 1403, iso: '2024-06-13', shamsi: '۱۴۰۳/۰۳/۲۴', dayName: 'پنجشنبه' },
    { day: 25, month: 'خرداد', year: 1403, iso: '2024-06-14', shamsi: '۱۴۰۳/۰۳/۲۵', dayName: 'جمعه' },
    { day: 26, month: 'خرداد', year: 1403, iso: '2024-06-15', shamsi: '۱۴۰۳/۰۳/۲۶', dayName: 'شنبه' },
    { day: 27, month: 'خرداد', year: 1403, iso: '2024-06-16', shamsi: '۱۴۰۳/۰۳/۲۷', dayName: 'یکشنبه' },
    { day: 28, month: 'خرداد', year: 1403, iso: '2024-06-17', shamsi: '۱۴۰۳/۰۳/۲۸', dayName: 'دوشنبه' },
    { day: 29, month: 'خرداد', year: 1403, iso: '2024-06-18', shamsi: '۱۴۰۳/۰۳/۲۹', dayName: 'سه‌شنبه' },
    { day: 30, month: 'خرداد', year: 1403, iso: '2024-06-19', shamsi: '۱۴۰۳/۰۳/۳۰', dayName: 'چهارشنبه' },
    { day: 31, month: 'خرداد', year: 1403, iso: '2024-06-20', shamsi: '۱۴۰۳/۰۳/۳۱', dayName: 'پنجشنبه' },
    { day: 1, month: 'تیر', year: 1403, iso: '2024-06-21', shamsi: '۱۴۰۳/۰۴/۰۱', dayName: 'جمعه' },
    { day: 2, month: 'تیر', year: 1403, iso: '2024-06-22', shamsi: '۱۴۰۳/۰۴/۰۲', dayName: 'شنبه' },
    { day: 3, month: 'تیر', year: 1403, iso: '2024-06-23', shamsi: '۱۴۰۳/۰۴/۰۳', dayName: 'یکشنبه' },
    { day: 4, month: 'تیر', year: 1403, iso: '2024-06-24', shamsi: '۱۴۰۳/۰۴/۰۴', dayName: 'دوشنبه' }
];

function renderCalendarUI() {
    calendarGrid.innerHTML = '';
    for (const date of eventDates) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.textContent = `${date.day} ${date.month} (${date.dayName})`;
        dayElement.dataset.dateIso = date.iso;
        dayElement.dataset.dateShamsi = date.shamsi;
        dayElement.dataset.dayName = date.dayName;
        const reservationsOnThisDay = countReservationsForDate(date.iso);
        if (reservationsOnThisDay >= 3) {
            dayElement.classList.add('disabled');
            dayElement.title = "ظرفیت رزرو (کل) برای این روز تکمیل است.";
        } else {
            dayElement.addEventListener('click', () => handleDateSelect(date));
        }
        calendarGrid.appendChild(dayElement);
    }
}

async function handleDateSelect(dateObj) {
    let totalReservationsToday = countReservationsForDate(dateObj.iso);
    if (totalReservationsToday >= 3) {
        await fetchAllReservationsAndUpdateCalendar();
        totalReservationsToday = countReservationsForDate(dateObj.iso);
        if (totalReservationsToday >= 3) {
             alert("متاسفانه ظرفیت کلی رزرو برای این روز تکمیل شده است. لطفاً روز دیگری را انتخاب کنید.");
             return; 
        }
    }
    selectedEventDate = dateObj;
    currentCart = {};
    selectedDateDisplay.textContent = `${dateObj.shamsi} (${dateObj.dayName})`;
    calendarContainer.classList.add('hidden');
    itemSelectionContainer.classList.remove('hidden');
    btnChangeDate.classList.remove('hidden');
    dailyLimitMessage.classList.add('hidden');
    await fetchDailyItemUsage(selectedEventDate.iso);
    renderReservationItems();
}

async function fetchDailyItemUsage(isoDate) {
    if (isFetchingDailyUsage) return;
    isFetchingDailyUsage = true;
    reservationItemsGrid.innerHTML = '<p>در حال دریافت موجودی اقلام برای این روز...</p>';
    dailyItemUsage = {}; 
    if (!GOOGLE_SHEET_WEB_APP_URL) {
        console.warn("URL وب اپ گوگل شیت تنظیم نشده. نمی‌توان موجودی روزانه را گرفت.");
        isFetchingDailyUsage = false;
        itemsData.forEach(item => dailyItemUsage[item.id] = 0); 
        return;
    }
    try {
        const url = new URL(GOOGLE_SHEET_WEB_APP_URL);
        url.searchParams.append('action', 'getReservedItemsByDate');
        url.searchParams.append('date', isoDate);
        const response = await fetch(url.toString(), { method: 'GET', mode: 'cors', cache: 'no-cache' });
        if (response.ok) {
            const result = await response.json();
            if (result.status === 'success' && typeof result.data === 'object') {
                dailyItemUsage = result.data;
            } else {
                console.error("خطا در دریافت موجودی روزانه از سرور:", result.message);
                itemsData.forEach(item => dailyItemUsage[item.id] = 0);
            }
        } else {
            console.error("خطای شبکه دریافت موجودی روزانه:", response.status, await response.text());
            itemsData.forEach(item => dailyItemUsage[item.id] = 0);
        }
    } catch (error) {
        console.error("خطای کلی دریافت موجودی روزانه:", error);
        itemsData.forEach(item => dailyItemUsage[item.id] = 0);
    }
    finally {
        isFetchingDailyUsage = false;
    }
}

function renderReservationItems() {
    reservationItemsGrid.innerHTML = '';
    if (!selectedEventDate) {
        reservationItemsGrid.innerHTML = '<p>لطفاً ابتدا یک تاریخ از تقویم انتخاب کنید.</p>';
        return;
    }
    itemsData.forEach(item => {
        const alreadyReservedCount = dailyItemUsage[item.id] || 0;
        const stockForToday = item.stock - alreadyReservedCount;
        const effectiveMaxForUserToday = Math.min(item.maxPerUser, stockForToday > 0 ? stockForToday : 0);
        const card = createItemCard(item, true, effectiveMaxForUserToday);
        reservationItemsGrid.appendChild(card);
    });
    reservationItemsGrid.querySelectorAll('.plus-btn, .minus-btn').forEach(button => {
        button.addEventListener('click', handleQuantityChange);
    });
}

function handleQuantityChange(event) {
    const itemId = event.target.dataset.itemId;
    const item = itemsData.find(i => i.id === itemId);
    if (!item) return;
    const effectiveMaxForThisUser = parseInt(event.target.closest('.quantity-controls').querySelector('.plus-btn').dataset.effectiveMax);
    const card = event.target.closest('.item-card');
    const quantityDisplay = card.querySelector('.quantity-display');
    const minusBtn = card.querySelector('.minus-btn');
    const plusBtn = card.querySelector('.plus-btn');
    let currentQuantityInCart = currentCart[itemId] || 0;
    if (event.target.classList.contains('plus-btn')) {
        if (currentQuantityInCart < effectiveMaxForThisUser) {
            currentQuantityInCart++;
        } else {
            if (effectiveMaxForThisUser === 0) {
                 alert(`موجودی "${item.name}" برای این روز تمام شده است.`);
            } else {
                 alert(`شما مجاز به انتخاب حداکثر ${effectiveMaxForThisUser} عدد از "${item.name}" برای این روز هستید.`);
            }
        }
    } else if (event.target.classList.contains('minus-btn')) {
        if (currentQuantityInCart > 0) {
            currentQuantityInCart--;
        }
    }
    currentCart[itemId] = currentQuantityInCart;
    quantityDisplay.textContent = currentQuantityInCart;
    minusBtn.disabled = (currentQuantityInCart === 0);
    plusBtn.disabled = (currentQuantityInCart >= effectiveMaxForThisUser || effectiveMaxForThisUser === 0);
    if (currentQuantityInCart === 0) {
        delete currentCart[itemId];
    }
}

function showFinalizeForm() {
    if (Object.keys(currentCart).length === 0) { alert("سبد خرید شما خالی است."); return; }
    if (!selectedEventDate) { alert("لطفا ابتدا تاریخ جشن را انتخاب کنید."); showView('reserveView'); return; }
    finalSelectedDate.textContent = `${selectedEventDate.shamsi} (${selectedEventDate.dayName})`;
    finalSelectedItemsList.innerHTML = '';
    for (const itemId in currentCart) {
        const item = itemsData.find(i => i.id === itemId);
        const quantity = currentCart[itemId];
        if (item && quantity > 0) {
            const li = document.createElement('li');
            li.textContent = `${item.name}: ${quantity}`; // واحد را هم می‌توانید اضافه کنید اگر لازم است
            finalSelectedItemsList.appendChild(li);
        }
    }
    formMessage.textContent = ''; formMessage.className = 'message';
    showView('finalizeFormView');
}

// --- Event Listeners ---
btnAllItems.addEventListener('click', () => { renderAllItems(); showView('allItemsView'); });

async function fetchAllReservationsAndUpdateCalendar() {
    if (isFetchingReservations) { return; }
    isFetchingReservations = true;
    calendarGrid.innerHTML = 'در حال بررسی ظرفیت روزها...';
    try { await fetchAllReservationsForLimitCheck(); }
    catch (error) { console.error("Error in fetchAllReservationsAndUpdateCalendar:", error); calendarGrid.innerHTML = 'خطا در بارگذاری ظرفیت.'; }
    finally { isFetchingReservations = false; renderCalendarUI(); }
}

btnReserve.addEventListener('click', async () => {
    calendarContainer.classList.remove('hidden'); itemSelectionContainer.classList.add('hidden');
    btnChangeDate.classList.add('hidden'); showView('reserveView');
    await fetchAllReservationsAndUpdateCalendar();
});

btnChangeDate.addEventListener('click', async () => {
    calendarContainer.classList.remove('hidden'); itemSelectionContainer.classList.add('hidden');
    btnChangeDate.classList.add('hidden'); selectedEventDate = null; currentCart = {}; dailyItemUsage = {};
    await fetchAllReservationsAndUpdateCalendar();
});

btnFinalizeLogin.addEventListener('click', () => {
    if (currentView === 'reserveView' && selectedEventDate && Object.keys(currentCart).length > 0) { showFinalizeForm(); }
    else if (currentView === 'reserveView' && selectedEventDate && Object.keys(currentCart).length === 0) { alert("لطفاً ابتدا اقلامی را انتخاب کنید."); }
    else if (currentView === 'reserveView' && !selectedEventDate) { alert("لطفاً ابتدا تاریخ جشن را انتخاب کنید."); }
    else { showFinalizeForm(); }
});

submitReservationBtn.addEventListener('click', handleSubmitOrLogin);

async function handleSubmitOrLogin() {
    const name = fullNameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name === "admin" && phone === "kerayechi110") {
        alert("ورود ادمین موفقیت آمیز بود!"); fullNameInput.value = ''; phoneInput.value = ''; showAdminPanel(); return;
    }
    if (!name || !phone) { formMessage.textContent = "لطفاً نام و شماره تلفن را وارد کنید."; formMessage.className = 'message error-message'; return; }
    if (!/^09\d{9}$/.test(phone)) { formMessage.textContent = "شماره تلفن معتبر نیست."; formMessage.className = 'message error-message'; return; }
    if (Object.keys(currentCart).length === 0) { formMessage.textContent = "سبد خرید شما خالی است."; formMessage.className = 'message error-message'; return; }
    if (!selectedEventDate) { formMessage.textContent = "تاریخ جشن انتخاب نشده است."; formMessage.className = 'message error-message'; showView('reserveView'); return; }

    formMessage.textContent = "در حال بررسی ظرفیت نهایی با سرور... لطفاً صبر کنید.";
    formMessage.className = 'message';
    submitReservationBtn.disabled = true;

    try {
        const capacityCheckUrl = new URL(GOOGLE_SHEET_WEB_APP_URL);
        capacityCheckUrl.searchParams.append('action', 'checkCapacity');
        capacityCheckUrl.searchParams.append('date', selectedEventDate.iso);
        
        // console.log(`%cSUBMIT: Checking capacity with server for date: ${selectedEventDate.iso}`, "color: red; font-weight: bold;");
        const capacityResponse = await fetch(capacityCheckUrl.toString(), { method: 'GET', mode: 'cors', cache: 'no-cache' });
        
        if (!capacityResponse.ok) {
            const errorText = await capacityResponse.text();
            throw new Error(`خطا در بررسی ظرفیت با سرور: ${capacityResponse.status}. ${errorText}`);
        }
        
        const capacityResult = await capacityResponse.json();
        // console.log(`%cSUBMIT: Server capacity check result for ${selectedEventDate.iso}: ${JSON.stringify(capacityResult)}`, "color: red;");

        if (capacityResult.status === "error") {
            throw new Error(`خطا از سرور هنگام بررسی ظرفیت: ${capacityResult.message}`);
        }

        if (capacityResult.count != null && capacityResult.count >= 3) {
            formMessage.textContent = `متاسفانه ظرفیت رزرو برای تاریخ ${selectedEventDate.shamsi} (بر اساس بررسی نهایی سرور) تکمیل شده است. لطفا تاریخ دیگری را انتخاب کنید.`;
            formMessage.className = 'message error-message';
            submitReservationBtn.disabled = false;
            return;
        }
        
        formMessage.textContent = "ظرفیت موجود است. در حال ارسال اطلاعات رزرو...";
        const submissionTimestamp = new Date();
        const submissionDateISO = submissionTimestamp.toISOString().split('T')[0];
        const reservationData = {
            fullName: name, phoneNumber: phone, eventDateISO: selectedEventDate.iso,
            eventDateShamsi: selectedEventDate.shamsi, reservedItems: JSON.stringify(currentCart),
            submissionDateISO: submissionDateISO, submissionDateShamsi: ""
        };
        
        const formData = new URLSearchParams();
        formData.append('fullName', reservationData.fullName);
        formData.append('phoneNumber', reservationData.phoneNumber);
        formData.append('eventDateISO', reservationData.eventDateISO);
        formData.append('eventDateShamsi', reservationData.eventDateShamsi);
        formData.append('reservedItems', reservationData.reservedItems);
        formData.append('submissionDateISO', reservationData.submissionDateISO);
        formData.append('submissionDateShamsi', reservationData.submissionDateShamsi);

        const postResponse = await fetch(GOOGLE_SHEET_WEB_APP_URL, { method: 'POST', mode: 'cors', cache: 'no-cache', body: formData });
        
        if (postResponse.ok) {
            const postResult = await postResponse.json();
            if (postResult.status === "success") {
                formMessage.textContent = "رزرو شما با موفقیت ثبت شد!";
                formMessage.className = 'message success-message';
                await fetchAllReservationsForLimitCheck(); 
                dailyItemUsage = {};
                // console.log(`%cSUBMIT: Reservation successful on server. allReservations updated. New Count: ${allReservations.length}`, "color: green;");
                fullNameInput.value = ''; phoneInput.value = ''; currentCart = {}; selectedEventDate = null;
                setTimeout(() => { renderAllItems(); showView('allItemsView'); }, 2000);
            } else if (postResult.status === "limit_reached") { 
                formMessage.textContent = `متاسفانه در آخرین لحظه ظرفیت برای تاریخ ${selectedEventDate.shamsi} تکمیل شد. رزرو شما ثبت نشد. لطفاً تاریخ دیگری را انتخاب کنید.`;
                formMessage.className = 'message error-message';
                await fetchAllReservationsAndUpdateCalendar();
            }
            else {
                throw new Error(postResult.message || "خطا در پاسخ از گوگل شیت پس از ارسال.");
            }
        } else {
             const errorText = await postResponse.text();
             console.error("Server POST response error text:", errorText);
             throw new Error(`خطا در ارتباط با سرور هنگام ثبت (کد وضعیت: ${postResponse.status}). جزئیات: ${errorText}`);
        }
    } catch (error) {
        console.error("Error in handleSubmitOrLogin:", error);
        formMessage.textContent = `خطا: ${error.message}. لطفاً دوباره تلاش کنید.`;
        formMessage.className = 'message error-message';
    } finally {
        submitReservationBtn.disabled = false;
    }
}

// --- توابع مربوط به پنل ادمین ---
async function showAdminPanel() {
    showView('adminView');
    await fetchAndRenderAdminData();
}

async function fetchAndRenderAdminData() {
    adminReservationsTableBody.innerHTML = '<tr><td colspan="4">در حال بارگذاری اطلاعات...</td></tr>';
    if (!GOOGLE_SHEET_WEB_APP_URL) { adminReservationsTableBody.innerHTML = '<tr><td colspan="4">URL تنظیم نشده.</td></tr>'; return; }
    try {
        await fetchAllReservationsForLimitCheck(); 
        if (!allReservations || allReservations.length === 0) { renderAdminTable([]); return; }
        let sortedReservations = [...allReservations];
        sortedReservations.sort((a, b) => {
            if (!a.eventDateISO || !b.eventDateISO) return 0;
            const dateA = new Date(a.eventDateISO); const dateB = new Date(b.eventDateISO);
            if (isNaN(dateA.getTime())) return 1; if (isNaN(dateB.getTime())) return -1;
            if (dateA.getTime() < dateB.getTime()) return -1; if (dateA.getTime() > dateB.getTime()) return 1;
            if (!a.Timestamp || !b.Timestamp) return 0;
            const timeA = new Date(a.Timestamp); const timeB = new Date(b.Timestamp);
            if (isNaN(timeA.getTime())) return 1; if (isNaN(timeB.getTime())) return -1;
            if (timeA.getTime() < timeB.getTime()) return -1; if (timeA.getTime() > timeB.getTime()) return 1;
            return 0;
        });
        renderAdminTable(sortedReservations);
    } catch (error) {
        console.error("Error fetching/processing admin data:", error);
        adminReservationsTableBody.innerHTML = `<tr><td colspan="4">خطا: ${error.message}</td></tr>`;
    }
}

function renderAdminTable(reservationsToRender) {
    adminReservationsTableBody.innerHTML = '';
    if (!reservationsToRender || reservationsToRender.length === 0) {
        adminReservationsTableBody.innerHTML = '<tr><td colspan="4">هیچ رزروی نیست.</td></tr>'; return;
    }
    const todayISO = new Date().toISOString().split('T')[0];
    reservationsToRender.forEach(res => {
        const row = adminReservationsTableBody.insertRow();
        row.insertCell().textContent = res.fullName || "N/A";
        row.insertCell().textContent = res.phoneNumber || "N/A";
        row.insertCell().textContent = res.eventDateShamsi || res.eventDateISO || "N/A";
        const itemsCell = row.insertCell(); itemsCell.style.textAlign = 'right'; itemsCell.style.whiteSpace = 'pre-wrap';
        let itemsText = "اقلامی انتخاب نشده.";
        try {
            const itemsObj = JSON.parse(res.reservedItems || '{}');
            const formattedItems = Object.entries(itemsObj).map(([itemId, quantity]) => {
                const itemDetails = itemsData.find(i => i.id === itemId);
                const displayName = (itemDetails && itemDetails.displayNameForUser) ? itemDetails.displayNameForUser : (itemDetails ? itemDetails.name : itemId);
                return `• ${displayName}: ${quantity}`;
            });
            if (formattedItems.length > 0) itemsText = formattedItems.join('\n'); else itemsText = "بدون قلم";
        } catch (e) { itemsText = "خطا در نمایش اقلام"; }
        itemsCell.textContent = itemsText;
        if (res.eventDateISO < todayISO) row.classList.add('past-event');
    });
}

refreshAdminDataBtn.addEventListener('click', fetchAndRenderAdminData);

function countReservationsForDate(isoDate) {
    if (!allReservations || allReservations.length === 0) return 0;
    const count = allReservations.filter(res => res.eventDateISO === isoDate).length;
    // console.log(`%cClient-side Count for ${isoDate}: ${count} (from allReservations with ${allReservations.length} entries)`, "color: teal;");
    return count;
}

async function fetchAllReservationsForLimitCheck() {
    if (!GOOGLE_SHEET_WEB_APP_URL) {
        console.warn("Google Sheet URL not set. Setting allReservations to empty.");
        allReservations = []; return;
    }
    if (isFetchingReservations) {
        // console.log("fetchAllReservationsForLimitCheck: Already fetching. Skipping.");
        return;
    }
    isFetchingReservations = true;
    // console.log("%cFETCHING ALL RESERVATIONS FROM SERVER...", "color: #FF8C00; font-weight: bold;");
    try {
        const fetchUrl = new URL(GOOGLE_SHEET_WEB_APP_URL);
        fetchUrl.searchParams.append('action', 'getReservations');
        const response = await fetch(fetchUrl.toString(), { method: 'GET', mode: 'cors', cache: 'no-cache' });
        if (response.ok) {
            const result = await response.json();
            if (result.status === "success" && Array.isArray(result.data)) {
                allReservations = result.data.map(row => ({
                    Timestamp: row[0], fullName: row[1], phoneNumber: row[2],
                    eventDateISO: row[3], eventDateShamsi: row[4], reservedItems: row[5],
                    submissionDateISO: row[6], submissionDateShamsi: row[7],
                })).filter(res => res.eventDateISO && typeof res.eventDateISO === 'string');
                // console.log(`%cSuccessfully fetched and updated allReservations. Count: ${allReservations.length}`, "color: #FF8C00;");
            } else {
                 console.warn("fetchAllReservationsForLimitCheck: Could not parse or error in response. Message:", result.message, ". Setting allReservations to empty.");
                 allReservations = [];
            }
        } else {
            const errorText = await response.text();
            console.warn("fetchAllReservationsForLimitCheck: Server error. Status:", response.status, "Error Text:", errorText, ". Setting allReservations to empty.");
            allReservations = [];
        }
    } catch (error) {
        console.warn("fetchAllReservationsForLimitCheck: Network or other error:", error, ". Setting allReservations to empty.");
        allReservations = [];
    } finally {
        isFetchingReservations = false;
        // console.log("%cfetchAllReservationsForLimitCheck: Fetch finished.", "color: #FF8C00;");
    }
}

function convertToShamsi(isoDateString) {
    if (!isoDateString) return "";
    try {
        const [year, month, day] = isoDateString.split('-').map(Number);
        if (year === 2024 && month === 6) {
            if (day >= 15 && day <= 20) return `۱۴۰۳/۰۳/${day - 15 + 26}`;
            if (day >= 21 && day <= 25) return `۱۴۰۳/۰۴/${day - 21 + 1}`;
        }
        const dateObj = new Date(isoDateString);
        const shamsiYear = dateObj.getFullYear() - 621;
        return `${shamsiYear}/${dateObj.getMonth() + 1}/${dateObj.getDate()} (تبدیل شمسی نام دقیق)`;
    } catch (e) { return isoDateString + " (خطا در تبدیل)"; }
}

// --- Initial Setup ---
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (welcomeContainer) welcomeContainer.classList.add('fade-out');
        setTimeout(async () => {
            if (welcomeContainer) welcomeContainer.style.display = 'none';
            if (appHeader) appHeader.classList.remove('hidden');
            if (appMain) appMain.classList.remove('hidden');
            await fetchAllReservationsForLimitCheck();
            renderAllItems(); showView('allItemsView'); 
        }, 500);
    }, 1500);
});
