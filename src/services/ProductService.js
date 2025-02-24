import useProductStore from "../store/productStore.ts";

class ProductService{
    static getProductsFromApi = async () => {
        // const productsList = [];

        //Appel API
        // const productsList = fetch(
        //     "https://geoffreydelumeau.github.io/zustand-api/products/products.json"
        // ).then(
        //     res => {
        //         return res.json();
        //     }
        // ).then(
        //     data => {return data}
        // ).catch(
        //
        // );
        try{
            const productsListJson = await  fetch(
                "https://geoffreydelumeau.github.io/zustand-api/products/products.json"
            );
            const productsList = await productsListJson.json();
            return productsList;
        }catch(error){
            console.log('Product API error : '+error);
            return [];
        }

    }
}

export default ProductService;