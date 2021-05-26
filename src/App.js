import react from 'react';
import Filter from './components/Filter';
import HeaderComponent from './components/HeaderComponent';
import ProductList from './components/ProductList';

class App extends react.Component{
    constructor(){
        super();
        this.state = {
            productList:[],
            baseProductList:[],
            sortValue:'',
            size:'',
            uniqueCategoryList:[],
            uniqueGenderList:[],
            selectedCategory:'',
            selectedGender:''
        }
        const apiUrl = 'https://demo7242716.mockable.io/products';
        fetch(apiUrl).then(resp => resp.json()).then(data =>{
            this.setState({
            productList:data.products,
            baseProductList : data.products
            });
            console.log(this.state.productList);
            let categoryList = this.state.productList.map(a => a.category);
            let uniqueCategory = categoryList.filter((c, index) => {
                return categoryList.indexOf(c) === index;
            });
            let genderList = this.state.productList.map(a => a.gender);
            let uniqueGender = genderList.filter((c, index) => {
                return genderList.indexOf(c) === index;
            });
            this.setState({
                uniqueCategoryList:uniqueCategory,
                uniqueGenderList:uniqueGender
            });
        });
        this.sortProducts = this.sortProducts.bind(this);
        this.sortFunction = this.sortFunction.bind(this);
    }
    sortProducts = (event) => {
        const sortValue=event.target.value;
        this.setState((state)=>({sortValue:sortValue}));
        const productListSel = this.state.productList;
        this.sortFunction(sortValue, productListSel);
    };
    sortFunction(sort, productListSelected){
        this.setState((state)=>({
            productList:productListSelected.slice().sort((a,b) => 
                sort === "lowest"
                ? a.price > b.price
                ? 1
                : -1
                :sort==="highest" 
                ?a.price > b.price
                ? -1
                : 1
                :a._id>b._id
                ? 1
                : -1
            ),
        }))
    }
    filterCategory=(event)=>{
        this.setState({
            selectedCategory: event.target.value
        });
        console.log("Gender vlsue   :", this.state.selectedGender);
        if(event.target.value===''){
            if(this.state.selectedGender ===''){
                this.setState({size:event.target.value,productList:this.state.baseProductList});
                this.sortFunction(this.state.sortValue, this.state.baseProductList);
            }else{
                const filteredGenderList = this.state.baseProductList.filter((product)=>product.gender.includes(this.state.selectedGender))
                this.setState({
                    productList:filteredGenderList,
                });
               this.sortFunction(this.state.sortValue, filteredGenderList);
            }
        }else{
            if(this.state.selectedGender ===''){
                const filteredCategoryList = this.state.baseProductList.filter((product)=>product.category.includes(event.target.value));
                this.setState({
                    productList:filteredCategoryList,
                });
              this.sortFunction(this.state.sortValue, filteredCategoryList);
            }else{
                let filters ={
                    category : event.target.value,
                    gender : this.state.selectedGender
                }
                const filteredList= this.state.baseProductList.filter(function(item) {
                    for (var key in filters) {
                      if (item[key] === undefined || item[key] != filters[key])
                        return false;
                    }
                    return true;
                });
                this.setState({
                    productList : filteredList
                });
                this.sortFunction(this.state.sortValue, filteredList);
            }
        }
    };
    filterGender=(event)=>{        
        this.setState({
            selectedGender: event.target.value
        });
        console.log("Category   :", this.state.selectedCategory);
        if(event.target.value===''){
            if(this.state.selectedCategory ===''){
                this.setState({size:event.target.value,productList:this.state.baseProductList});
                this.sortFunction(this.state.sortValue, this.state.baseProductList);
            }else{
                const filteredCategoryList = this.state.baseProductList.filter((product)=>product.category.includes(this.state.selectedCategory))
                this.setState({
                    productList:filteredCategoryList,
                });
               this.sortFunction(this.state.sortValue,filteredCategoryList);
            }
        }else{
            if(this.state.selectedCategory ===''){
                const filteredGenderList = this.state.baseProductList.filter((product)=>product.gender.includes(event.target.value));
                this.setState({
                    productList:filteredGenderList,
                });
               this.sortFunction(this.state.sortValue, filteredGenderList);
            }else{
                let filters ={
                    gender : event.target.value,
                    category : this.state.selectedCategory
                }
                const filteredList= this.state.baseProductList.filter(function(item) {
                    for (var key in filters) {
                      if (item[key] === undefined || item[key] != filters[key])
                        return false;
                    }
                    return true;
                });
                this.setState({
                    productList : filteredList
                });
               this.sortFunction(this.state.sortValue, filteredList);
            }
        }
    };
    render(){
        return(
            <div className="">
                <div className="header">
                    <HeaderComponent></HeaderComponent>
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className="filterSection">
                            <Filter count={this.state.productList.length}
                            sort={this.state.sort}
                            size={this.state.size}
                            sortCallBack={this.sortCallBack}
                            sortProducts={this.sortProducts}
                            filterGender={this.filterGender}
                            categoryList={this.state.uniqueCategoryList}
                            genderList={this.state.uniqueGenderList}
                            filterCategory={this.filterCategory}></Filter>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="productListSection">
                            <ProductList productLists={this.state.productList}></ProductList>
                        </div>
                    </div>
                </div>
                
                <div className="footer"></div>
            </div>
        );
    }
}

export default App;
