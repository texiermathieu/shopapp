describe("Given : l'utilisateur accèdce à l'application",()=>{
    describe("When : à l'initilisation",() => {
        test("Then : mon application s'affiche sur la vue principale",()=>{
            //j'affiche mon composant à l'écran
            render(<App/>);
            const titleNode = screen.getByRole("heading",{name:'ffff'})
        })
    })
})