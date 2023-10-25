const products = [
    {
        "ProductImageURL": "https://plus.unsplash.com/premium_photo-1682096340835-022e6647b698?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 1",
        "ProductDescription": "This is the product description for Product Title 1.",
        "ProductPrice": 100
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 2",
        "ProductDescription": "This is the product description for Product Title 2.",
        "ProductPrice": 110
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 3",
        "ProductDescription": "This is the product description for Product Title 3.",
        "ProductPrice": 120
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 1",
        "ProductDescription": "This is the product description for Product Title 1.",
        "ProductPrice": 100
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 2",
        "ProductDescription": "This is the product description for Product Title 2.",
        "ProductPrice": 110
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 3",
        "ProductDescription": "This is the product description for Product Title 3.",
        "ProductPrice": 120
    },
    {
        "ProductImageURL": "https://plus.unsplash.com/premium_photo-1682096340835-022e6647b698?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 1",
        "ProductDescription": "This is the product description for Product Title 1.",
        "ProductPrice": 100
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 2",
        "ProductDescription": "This is the product description for Product Title 2.",
        "ProductPrice": 110
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 3",
        "ProductDescription": "This is the product description for Product Title 3.",
        "ProductPrice": 120
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 1",
        "ProductDescription": "This is the product description for Product Title 1.",
        "ProductPrice": 100
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 2",
        "ProductDescription": "This is the product description for Product Title 2.",
        "ProductPrice": 110
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 3",
        "ProductDescription": "This is the product description for Product Title 3.",
        "ProductPrice": 120
    },
    {
        "ProductImageURL": "https://plus.unsplash.com/premium_photo-1682096340835-022e6647b698?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 1",
        "ProductDescription": "This is the product description for Product Title 1.",
        "ProductPrice": 100
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 2",
        "ProductDescription": "This is the product description for Product Title 2.",
        "ProductPrice": 110
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 3",
        "ProductDescription": "This is the product description for Product Title 3.",
        "ProductPrice": 120
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 1",
        "ProductDescription": "This is the product description for Product Title 1.",
        "ProductPrice": 100
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 2",
        "ProductDescription": "This is the product description for Product Title 2.",
        "ProductPrice": 110
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 3",
        "ProductDescription": "This is the product description for Product Title 3.",
        "ProductPrice": 120
    },
    {
        "ProductImageURL": "https://plus.unsplash.com/premium_photo-1682096340835-022e6647b698?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 1",
        "ProductDescription": "This is the product description for Product Title 1.",
        "ProductPrice": 100
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 2",
        "ProductDescription": "This is the product description for Product Title 2.",
        "ProductPrice": 110
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 3",
        "ProductDescription": "This is the product description for Product Title 3.",
        "ProductPrice": 120
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 1",
        "ProductDescription": "This is the product description for Product Title 1.",
        "ProductPrice": 100
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 2",
        "ProductDescription": "This is the product description for Product Title 2.",
        "ProductPrice": 110
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 3",
        "ProductDescription": "This is the product description for Product Title 3.",
        "ProductPrice": 120
    },
    {
        "ProductImageURL": "https://plus.unsplash.com/premium_photo-1682096340835-022e6647b698?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 1",
        "ProductDescription": "This is the product description for Product Title 1.",
        "ProductPrice": 100
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 2",
        "ProductDescription": "This is the product description for Product Title 2.",
        "ProductPrice": 110
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 3",
        "ProductDescription": "This is the product description for Product Title 3.",
        "ProductPrice": 120
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 1",
        "ProductDescription": "This is the product description for Product Title 1.",
        "ProductPrice": 100
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 2",
        "ProductDescription": "This is the product description for Product Title 2.",
        "ProductPrice": 110
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 3",
        "ProductDescription": "This is the product description for Product Title 3.",
        "ProductPrice": 120
    },
    {
        "ProductImageURL": "https://plus.unsplash.com/premium_photo-1682096340835-022e6647b698?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 1",
        "ProductDescription": "This is the product description for Product Title 1.",
        "ProductPrice": 100
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 2",
        "ProductDescription": "This is the product description for Product Title 2.",
        "ProductPrice": 110
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 3",
        "ProductDescription": "This is the product description for Product Title 3.",
        "ProductPrice": 120
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 1",
        "ProductDescription": "This is the product description for Product Title 1.",
        "ProductPrice": 100
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 2",
        "ProductDescription": "This is the product description for Product Title 2.",
        "ProductPrice": 110
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 3",
        "ProductDescription": "This is the product description for Product Title 3.",
        "ProductPrice": 120
    },
    {
        "ProductImageURL": "https://plus.unsplash.com/premium_photo-1682096340835-022e6647b698?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 1",
        "ProductDescription": "This is the product description for Product Title 1.",
        "ProductPrice": 100
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 2",
        "ProductDescription": "This is the product description for Product Title 2.",
        "ProductPrice": 110
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 3",
        "ProductDescription": "This is the product description for Product Title 3.",
        "ProductPrice": 120
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 1",
        "ProductDescription": "This is the product description for Product Title 1.",
        "ProductPrice": 100
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 2",
        "ProductDescription": "This is the product description for Product Title 2.",
        "ProductPrice": 110
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 3",
        "ProductDescription": "This is the product description for Product Title 3.",
        "ProductPrice": 120
    },
    {
        "ProductImageURL": "https://plus.unsplash.com/premium_photo-1682096340835-022e6647b698?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 1",
        "ProductDescription": "This is the product description for Product Title 1.",
        "ProductPrice": 100
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 2",
        "ProductDescription": "This is the product description for Product Title 2.",
        "ProductPrice": 110
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 3",
        "ProductDescription": "This is the product description for Product Title 3.",
        "ProductPrice": 120
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 1",
        "ProductDescription": "This is the product description for Product Title 1.",
        "ProductPrice": 100
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        "ProductTitle": "Product Title 2",
        "ProductDescription": "This is the product description for Product Title 2.",
        "ProductPrice": 110
    },
    {
        "ProductImageURL": "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0fGVufDB8fDB8fHww",
        "ProductTitle": "Product Title 3",
        "ProductDescription": "This is the product description for Product Title 3.",
        "ProductPrice": 120
    },
];

export default products;