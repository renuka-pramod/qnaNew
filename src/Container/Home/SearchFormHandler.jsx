import React from "react";
import './Home.css';
import Input from '../../Presentational/Input';
// import Button from '../../Presentational/Button';

const SearchFormHandler = () => {
    return (
        <form>
            <Input
                placeholder="Search"
                type="text"
                className="question-search" />
            <i className="fa fa-search"/>
            
            {/* <Button name="Search" className="search-button primary-button" /> */}
            <div className="clearfix"></div>
        </form>
    );
}
export default SearchFormHandler;