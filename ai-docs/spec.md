# E-Commerce Frontend Application Specification

## Project Overview
- The application is an e-commerce frontend for browsing and viewing electronic products, organized by categories.
- The application layout will consist of Header, Left Side Menu, and Footer.
- Pages – Home and Product Detail pages.
- Static JSON files will be used as data sources (no backend logic).
- This is a PoC with a one-hour build time constraint.

## Product Categories
The application will include the following electronic product categories:
- Computers
- Tablets
- Cell Phones
- Smart Watches
- Mobile Accessories
- Headphones
- Speakers
- TV & Video
- Video Games and Consoles

## Page Structure

### Home Page
- **Categories sidebar** displaying all product categories
- **Featured products section** with a grid layout
- **Search bar** for product search
- **View more** CTA button for each category section

### Product Detail Page
Each product detail page will display:
- Product name
- Price (original price)
- Stock availability
- Images gallery/vertical carousel
- Description
- Specifications
- Rating
- Quantity selector
- Add to cart button
- Add to wishlist button
- Related items section

## Component Structure

### Header Component
- Search bar
- Cart icon
- User account link/icon

### Left Side Menu Component
- List of all product categories
- Navigation links

### Footer Component
- **Support section**
  - Address
  - Email
  - Phone
- **Account section**
  - My Account
  - Login/Register
  - Cart
  - Wishlist
  - Shop
- **Quick links**
  - Policies
  - FAQ
  - Contact

## Product Listing (Home Page)
Each product in the listing will display:
- Thumbnail image
- Name
- Price (original price)
- Stock availability
- Short description
- Ratings

## Data Structure

### Categories Data Structure (categories.json)
```json
[
  {
    "id": "1",
    "name": "Computers",
    "slug": "computers",
    "icon": "/icons/computer.svg"
  },
  {
    "id": "2",
    "name": "Tablets",
    "slug": "tablets",
    "icon": "/icons/tablet.svg"
  }
  // Other categories...
]
```

### Products Data Structure (products.json)
```json
[
  {
    "id": "1",
    "name": "MacBook Pro 16-inch",
    "category_id": "1",
    "price": 2399.99,
    "sale_price": 2199.99,
    "stock": 15,
    "thumbnail": "/images/products/macbook-pro-thumb.jpg",
    "images": [
      "/images/products/macbook-pro-1.jpg",
      "/images/products/macbook-pro-2.jpg",
      "/images/products/macbook-pro-3.jpg"
    ],
    "description": "Powerful laptop with M2 Pro chip for professionals",
    "full_description": "The MacBook Pro 16-inch delivers game-changing performance for pros. With the M2 Pro chip — and the option for M2 Max — you get incredible capability from the ultimate laptop, with up to 96GB of unified memory, exceptional CPU and GPU performance, support for two external displays, and more.",
    "specifications": {
      "processor": "Apple M2 Pro/M2 Max",
      "memory": "16GB-96GB",
      "storage": "512GB-8TB SSD",
      "display": "16-inch Liquid Retina XDR display",
      "battery": "Up to 22 hours"
    },
    "rating": 4.9,
    "related_products": ["2", "5", "8"]
  }
  // Other products...
]
```

## File Structure
```
/
├── public/
│   ├── icons/
│   │   └── [category icons]
│   └── images/
│       └── products/
│           └── [product images]
├── src/
│   ├── app/
│   │   ├── page.tsx (Home page)
│   │   ├── product/[id]/page.tsx (Product detail page)
│   │   ├── layout.tsx (Root layout with Header, Footer)
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductDetail.tsx
│   │   ├── ImageCarousel.tsx
│   │   ├── QuantitySelector.tsx
│   │   ├── AddToCartButton.tsx
│   │   ├── WishlistButton.tsx
│   │   ├── RelatedItems.tsx
│   │   └── Accordion.tsx
│   ├── hooks/
│   │   └── useMediaQuery.ts
│   └── data/
│       ├── categories.json
│       └── products.json
└── [configuration files]
```

## Tech Stack
- Next.js 15.3.2
- React 19.0.0
- TypeScript
- Tailwind CSS 4

## UI Design Style
- **Design approach**: Clean, modern minimalist design with ample white space
- **Color scheme**: Primary brand color (#3482F6 - blue), with accent colors (#10B981 - green for success, #F59E0B - amber for warnings, #EF4444 - red for errors)
- **Typography**: Sans-serif fonts (Inter or similar) for clean readability
- **Component styling**: 
  - Subtle shadows and rounded corners on cards and interactive elements
  - Clear visual hierarchy with consistent spacing
  - Responsive design that works on all device sizes
- **Interactions**: 
  - Subtle hover effects on interactive elements
  - Smooth transitions and animations

## Responsive Design
- **Mobile Layout (< 768px)**:
  - Sidebar transforms into a hamburger menu
  - Product grid changes to 1-2 items per row
  - Simplified header with collapsible search
  - Footer sections stack vertically
  - On product detail page, specifications display in accordion format
  - Related items show as horizontal scrollable carousel

- **Tablet Layout (768px - 1024px)**:
  - Sidebar can be toggled on/off with a button
  - Product grid with 2-3 items per row
  - Full header with search bar
  - Footer in 2-column layout
  
- **Desktop Layout (> 1024px)**:
  - Always-visible sidebar
  - Product grid with 3-4 items per row
  - Full-featured header
  - Footer in multi-column layout

## Navigation Flow
1. User lands on the Home page
2. User can browse products by category through the sidebar
3. User can click on a product to view its details
4. User can return to Home from any page via the header

## Future Enhancements (Not in initial PoC)
- Filtering and sorting functionality
- Reviews system
- Shopping cart functionality
- User authentication
