import requests

class WordPressAPI:
    def __init__(self, base_url, username, password):
        self.base_url = base_url
        self.username = username
        self.password = password

    def get_categories(self):
        url = f"{self.base_url}/wp-json/wc/v3/products/categories"
        response = requests.get(url, auth=(self.username, self.password))
        response.raise_for_status()
        return response.json()

    def create_product(self, name, price, description, category_id, images):
        url = f"{self.base_url}/wp-json/wc/v3/products"

        data = {
            'name': name,
            'regular_price': price,
            'description': description,
            'categories': [{'id': category_id}],
            'status': 'draft',
            'images': []
        }

        for image in images:
            image_url = self.upload_image(image)
            data['images'].append({'src': image_url})

        response = requests.post(url, auth=(self.username, self.password), json=data)
        response.raise_for_status()
        return response.json()

    def upload_image(self, image_file):
        # This is a simplified implementation. A more robust solution would handle different image types and potential errors.
        url = f"{self.base_url}/wp-json/wp/v2/media"

        image_data = image_file.download_as_bytearray()

        headers = {
            'Content-Disposition': f'attachment; filename={image_file.file_id}.jpg',
            'Content-Type': 'image/jpeg'
        }

        response = requests.post(url, auth=(self.username, self.password), headers=headers, data=image_data)
        response.raise_for_status()

        return response.json()['source_url']
