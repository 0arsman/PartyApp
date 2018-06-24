import React from 'react';
import Category from './Category';

class Categories extends React.Component {
  render() {
    return (
        <div className="categories">
            
                <h1>Categories</h1>
                {this.props.categories.map((el, i) => {
                    return <Category key={i} {...this.props} id={i} />
                })}
               
        </div>
    );
  }
}

export default Categories;