class ProductService {
    static getProductsFromApi = async () => {

        try {

            // Appel API
            // const productList = fetch(
            //     "https://geoffreydelumeau.github.io/zustand-api/products/products.json"
            // ).then(
            //     res => res.json()
            // ).then(
            //     data => {
            //         return data
            //     }
            // );

            // Fonction asynchrone !!!  => await
            const productsListJson = await fetch(
                    "https://geoffreydelumeau.github.io/zustand-api/products/products.json"
            );

            // Fonction asynchrone !!!  => await
            const productsList = await productsListJson.json();

            // console.log(productsList);

            return productsList;

        } catch(error) {
            console.error("Product API error :", error);
            return [];
        }
    }
}

export default ProductService;