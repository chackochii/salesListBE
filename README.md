Sales List Backend API
A production-grade Node.js backend built with Express and Sequelize (PostgreSQL). This API manages a Master-Detail sales system featuring cascading lookups, atomic transactions, and cloud-ready SSL security.

🚀 Features
Feature-Based Modular Architecture: Organized by domain (User, Product, Sales) for maximum scalability.
Atomic Database Transactions: Ensuring data integrity between SalesMaster and SalesDetails.
Cascading Dropdown Support: Optimized endpoints for filtering cities by country.
RESTful API Versioning: All endpoints are prefixed with /api/v1.
ES Modules (ESM): Utilizing modern import/export syntax.

📂 Folder Structure

backend/
├── config/
│   └── db.config.js        
├── environments/
│   ├── .env                
│   └── ca-certificate.crt  
├── modules/
│   ├── user/             
│   ├── country/           
│   ├── city/               
│   ├── product/           
│   ├── salesMaster/       
│   ├── salesDetails/      
│   ├── sales/            
│   └── index.js           
├── routes/
│   ├── index.js          
│   ├── saleRoutes.js
│   ├── cityRoutes.js    
│   └── ...                 
├── app.js                
└── server.js        


🛠️ Setup & Installation

1. Prerequisites
Node.js (v20+)
PostgreSQL Instance (Local or DigitalOcean Managed)


2. Installation
   git clone <your-repo-url>
   cd root folder
   npm install

3. Environment Configuration

   PORT=8080

   
   DB_HOST=your-do-host.ondigitalocean.com

   
   DB_PORT=25060

   
   DB_USER=doadmin

   
   DB_PASSWORD=your_password

   
   DB_NAME=defaultdb

4. Start the Server

# Development mode with nodemon
npm run dev

# Production mode
npm start


🛣️ API Endpoints (v1)
Metadata & Dropdowns
Method	Endpoint	Description
GET	/api/v1/users	List all available users
GET	/api/v1/countries	List all countries
GET	/api/v1/cities/:countryId	List cities filtered by CountryID
GET	/api/v1/products	List products with UnitPrice
GET	/api/v1/sales/meta-data	Combined Users, Countries, and Products
Sales Transactions
Method	Endpoint	Description
POST	/api/v1/sales/submit	Save SalesMaster and SalesDetails (Atomic)
GET	/api/v1/sales/list	Fetch sales history with nested details




🛡️ Database Transactions
This project uses the Sequelize Managed Transaction pattern. When a sale is submitted:
It validates the user and date.
It creates a SalesMaster entry.
It maps the returned ID to all SalesDetails rows.
If any detail row fails (validation or constraint), the entire transaction—including the Master entry—is rolled back.







