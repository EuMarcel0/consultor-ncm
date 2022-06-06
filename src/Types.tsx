export type Item = {
    description: '';
    thumbnail: '';
    gtin: '';
    barcode_image: '';
    ncm: {
        code: '';
        full_description: '';
    };
    cest?: {
        code: '';
        description: '';
    };
    gpc?: {
        code: '';
        description: '';
    };
    updated_at: '';
    origin: '';
    max_price: '';
    min_price: '';
    avg_price: '';
    price: '';
    current_page: '';
    per_page: '';
    total_pages: '';
    total_count: '';
    next_page: '';
}
