### UI/UX Style Guide: E-Commerce Platform

## General Overview of the Design System

The design system follows a clean, modern e-commerce aesthetic with a focus on product presentation and user-friendly navigation. It employs a minimalist approach with strategic use of accent colors to highlight important actions and information. The overall design language prioritizes clarity, consistency, and ease of use across different device sizes.

The interface is built on a grid-based layout with clear visual hierarchy, guiding users through the shopping experience from browsing to product details. White space is used effectively to create breathing room between elements, while maintaining a dense enough information architecture to showcase multiple products efficiently.

The design system emphasizes product imagery against neutral backgrounds, with consistent component styling across the platform. Interactive elements follow predictable patterns, with clear hover and active states to enhance usability.

## Color Palette

### Primary Colors

- **Primary Red** `#DB4444` - Used for CTAs, sale tags, and highlighting important elements
- **Black** `#000000` - Used for footer background, primary text, and some UI elements
- **White** `#FFFFFF` - Primary background color, text on dark backgrounds


### Secondary Colors

- **Light Gray** `#F5F5F5` - Product backgrounds, input fields, secondary backgrounds
- **Medium Gray** `#D9D9D9` - Borders, dividers, inactive elements
- **Dark Gray** `#1C1B1F` - Secondary text color
- **Rating Gold** `#FFAD33` - Star ratings


### Status Colors

- **Green** `#00FF66` - In-stock indicators, success states
- **Red** `#DB4444` - Sale indicators, error states, primary actions


### Neutral Shades

- **Gray 100** `#FAFAFA` - Subtle background variations
- **Gray 200** `#F5F5F5` - Component backgrounds
- **Gray 300** `#D9D9D9` - Borders, dividers
- **Gray 400** `#A9A9A9` - Placeholder text, disabled states
- **Gray 500** `#808080` - Secondary text, icons
- **Gray 600** `#4D4D4D` - Primary text on light backgrounds


## Typography

### Font Family

- **Primary Font**: Sans-serif (appears to be a system font like Inter or similar)


### Font Sizes

- **Display (H1)**: 24px / 1.5rem - Product page titles
- **Heading (H2)**: 20px / 1.25rem - Section headings ("Explore Our Products")
- **Subheading (H3)**: 16px / 1rem - Product titles, footer section headings
- **Body**: 14px / 0.875rem - General text, descriptions
- **Small**: 12px / 0.75rem - Supporting text, ratings count
- **Extra Small**: 10px / 0.625rem - Footer fine print, app download text


### Font Weights

- **Regular**: 400 - Body text, secondary information
- **Medium**: 500 - Navigation, product titles
- **Semibold**: 600 - Prices, important information
- **Bold**: 700 - Section headings, CTAs, emphasis


## Spacing System

The design uses a consistent 8px base unit for spacing:

- **4px** (0.25rem) - Minimum spacing, tight elements
- **8px** (0.5rem) - Standard spacing between related elements
- **16px** (1rem) - Standard padding, spacing between groups
- **24px** (1.5rem) - Section padding
- **32px** (2rem) - Large section spacing
- **48px** (3rem) - Major section divisions


## Grid System

- **Container Width**: Max 1400px with responsive padding
- **Column Gap**: 24px (1.5rem)
- **Product Grid**:

- Desktop: 3-4 columns
- Tablet: 2-3 columns
- Mobile: 1-2 columns



- **Sidebar Width**: 256px (16rem)


## UI Components

### Buttons

#### Primary Button

- Background: `#DB4444`
- Text: White
- Padding: 12px 32px (0.75rem 2rem)
- Border Radius: 4px
- Font: Medium/Semibold
- Hover: Opacity 90%


#### Secondary Button

- Background: White
- Border: 1px solid `#D9D9D9`
- Text: `#1C1B1F`
- Padding: 12px 32px (0.75rem 2rem)
- Border Radius: 4px
- Hover: Border color darkens


#### Icon Button

- Background: White
- Border: None or 1px solid `#D9D9D9` (context dependent)
- Size: 40px × 40px (2.5rem)
- Border Radius: 50% (circular) or 4px (square)
- Hover: Light gray background


### Input Fields

#### Search Input

- Background: `#F5F5F5`
- Border: None
- Border Radius: 4px
- Padding: 8px 16px (0.5rem 1rem)
- Placeholder: Gray 500
- Icon: Right-aligned search icon


#### Quantity Selector

- Background: White
- Border: 1px solid `#D9D9D9`
- Border Radius: 4px
- Controls: "-" and "+" buttons with center display


### Cards

#### Product Card

- Background: White
- Product Image Area: `#F5F5F5` background
- Padding: 16px (1rem)
- Border Radius: 4px
- Information: Product title, price, ratings
- Interactive Elements: Heart icon (wishlist)
- Special Tags: Sale (-25%), New (positioned top-left)


### Navigation

#### Main Navigation

- Background: White
- Text: Black
- Font Weight: Medium
- Spacing: 32px (2rem) between items
- Active State: Text color changes to `#DB4444`


#### Sidebar Navigation

- Background: White
- Text: Black/Dark Gray
- Categories: Left-aligned text list
- Hover: Text color changes to `#DB4444`


### Selection Controls

#### Color Selector

- Size: 48px × 48px (3rem)
- Border: 2px solid `#DB4444` when selected
- Border Radius: 50% (circular)


#### Size Selector

- Size: 32px × 32px (2rem)
- Background: `#DB4444` when selected, White otherwise
- Text: White when selected, Black otherwise
- Border: 1px solid `#D9D9D9` when not selected
- Border Radius: 4px


## UI Sections - Colors and Typography

### Header

- **Background**: White (`#FFFFFF`)
- **Border Bottom**: Light gray (`#D9D9D9`)
- **Logo Text**: Black (`#000000`), Bold
- **Navigation Text**: Black (`#000000`), Medium weight
- **Search Input**: Light gray background (`#F5F5F5`), Gray placeholder text
- **Icons**: Black (`#000000`)


### Sidebar

- **Background**: White (`#FFFFFF`)
- **Category Headings**: Black (`#000000`), Semibold
- **Category Items**: Dark gray (`#1C1B1F`), Regular weight
- **Hover State**: Red (`#DB4444`)


### Product Grid

- **Section Heading**: Black (`#000000`), Bold
- **Background**: White (`#FFFFFF`)
- **Product Card Background**: White (`#FFFFFF`)
- **Product Image Background**: Light gray (`#F5F5F5`)
- **Product Title**: Dark gray (`#1C1B1F`), Medium weight
- **Price**: Red (`#DB4444`), Semibold
- **Original Price**: Gray (`#A9A9A9`), Regular weight, Strikethrough
- **Rating Stars**: Gold (`#FFAD33`)
- **Rating Count**: Gray (`#808080`), Regular weight
- **Sale Tag**: Red (`#DB4444`) background, White text
- **New Tag**: Green (`#00FF66`) background, White text


### Product Detail Page

- **Background**: White (`#FFFFFF`)
- **Breadcrumb**: Gray (`#808080`), Regular weight
- **Product Title**: Black (`#000000`), Semibold
- **Price**: Black (`#000000`), Semibold, Larger size
- **Description**: Dark gray (`#4D4D4D`), Regular weight
- **Section Dividers**: Light gray (`#D9D9D9`)
- **Color/Size Labels**: Black (`#000000`), Medium weight
- **Delivery Info Background**: White (`#FFFFFF`)
- **Delivery Info Border**: Light gray (`#D9D9D9`)
- **Delivery Info Text**: Dark gray (`#1C1B1F`) for headings, Gray (`#808080`) for details


### Footer

- **Background**: Black (`#000000`)
- **Headings**: White (`#FFFFFF`), Bold
- **Text**: Light gray (`#D9D9D9`), Regular weight
- **Social Icons**: White (`#FFFFFF`)
- **App Download Section**:

- QR Code: White (`#FFFFFF`) background
- Store Buttons: Black (`#000000`) background, White (`#FFFFFF`) border
- Button Text: White (`#FFFFFF`)





## Interactive Behaviors

### Buttons

- **Hover**: Opacity changes to 90% for primary buttons
- **Active/Pressed**: Slightly darker shade
- **Disabled**: 50% opacity, non-interactive


### Navigation Items

- **Hover**: Text color changes to `#DB4444`
- **Active**: Text color `#DB4444`, possibly with subtle indicator


### Product Cards

- **Hover**: Subtle elevation effect (not explicitly shown but common pattern)
- **Wishlist Icon**: Toggles between outlined and filled states


### Form Controls

- **Focus**: Input fields may show a subtle highlight or border change
- **Validation**: Error states likely use red indicators (not explicitly shown)


## Design Principles Applied

1. **Visual Hierarchy**: Important elements like CTAs and prices are emphasized through color and typography
2. **Consistency**: Repeated patterns in product cards, buttons, and section layouts
3. **Accessibility**: Sufficient color contrast for text readability
4. **Simplicity**: Clean layouts with focused content and minimal distractions
5. **Responsive Design**: Adaptable grid system for different screen sizes
6. **Affordance**: Interactive elements are clearly distinguishable
7. **Feedback**: Visual cues for interactive states (hover, selected)


This style guide provides a comprehensive foundation for maintaining design consistency across the e-commerce platform while allowing for scalable implementation across various product categories and user journeys.