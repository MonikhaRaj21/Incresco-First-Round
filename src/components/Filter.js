import React, { Component } from "react";

class Filter extends Component{
    render()
    {
        return(
           <div className='filterArea'>
               <div className='filterSection'>
                   <label className='filterText'>Price Order</label>
                   <select className='form-control' onChange={this.props.sortProducts}>
                       <option value=''>--</option>
                       <option value='lowest'>Lowest</option>
                       <option value='highest'>Highest</option>
                   </select>
               </div>
               <div className='filterSection'>
                    <label className='filterText'>Category</label>
                    <select className='form-control' onChange={this.props.filterCategory}> 
                        <option value="">--</option>
                        {this.props.categoryList.map((category) => (
                            <option value={category}>{category}</option>
                        ))}
                    </select>
               </div>
               <div className='filterSection'>
                    <label className='filterText'>Gender</label>
                    <select className='form-control' onChange={this.props.filterGender}> 
                        <option value="">--</option>
                        {this.props.genderList.map((category) => (
                            <option value={category}>{category}</option>
                        ))}
                    </select>
                </div>
           </div> 
        );
    }
}

export default Filter;