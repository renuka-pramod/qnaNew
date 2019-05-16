import React, { Component } from "react";
import './Home.css';
import SearchFormHandler from './SearchFormHandler';
import ListViewHandler from './ListViewHandler';
import { DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header';


class Home extends Component {

    constructor() {
        super();
        this.state = {
            details: [],
            questionData: {}
        }
    }


    async componentDidMount() {
        await this.getQuestionsFromApiAsync();
    }


    getQuestionsFromApiAsync = () => {
        let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'http://myhistoryclass.co.in/sch/api/Questions/GetAllQuestions'
        fetch(proxyUrl + targetUrl)
            .then(resp => resp.json()).then(data => {
                this.setState({
                    details: data
                })
            })
    }

    editQuestion = (data) => {
        this.setState({
            questionData: data
        });
    }


    render() {
        const { questionData } = this.state;

        return this.state.details && (
            <div>
                <Header />
                <div className="home container">
                    <DropdownButton
                        alignRight
                        title={<i className="fa fa-plus"></i>}
                        id="select"
                        className="pull-right">
                        <Link to={{
                            pathname: '/multipleChoice',
                            state: { questionData: questionData }
                        }}>Multiple Choice Questions</Link>
                        <Link to='/qAndA'>Questions & Answers</Link>
                        <Link to='/referenceqandA'>Reference Question & Answers</Link>
                    </DropdownButton>
                    <div className="clearfix"></div>
                    <SearchFormHandler />
                    <ListViewHandler details={this.state.details} editQuestion={this.editQuestion} questionData={questionData} />
                </div>
            </div>
        );
    }
}
export default Home;
