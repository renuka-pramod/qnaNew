import React, { Component }  from 'react';
import Select from '../../Presentational/Select';
import Input from '../../Presentational/Input';
import Button from '../../Presentational/Button';
import TextArea from '../../Presentational/TextArea';
import Header from '../Header';


const inputParsers = {
    lowercase(input) {
        return input.toLowerCase();
    },
    dropdown(input) {
        return input
    }
};

class ReferenceQandA extends Component {
    constructor() {
        super();
        this.state = {
            universityValues: ["U1", "U2", "U3"],
            classValues: ["C1", "C2", "C3"],
            subjectValues: ["S1", "S2", "S3"],
            chapterValues: ["Ch1", "Ch2", "Ch3"],
            typeValues: ["T1", "T2", "T3"],
            probabilityValues: ["High", "Medium", "Low"],
            quesTypeValues: ["Option1", "Option2", "Option3", "Option4"]
        }
    }

    stringifyFormData = (fd) => {
        const data = {};
        for (let key of fd.keys()) {
            data[key] = fd.get(key);
        }
        return JSON.stringify(data, null, 2);
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        for (let name of data.keys()) {
            const input = form.elements[name];
            const parserName = input.dataset.parse;
            if (parserName) {
                const parsedValue = inputParsers[parserName](data.get(name))
                data.set(name, parsedValue);
            }
        }
        fetch('http://myhistoryclass.co.in/sch/api/Questions/InsertRefQuestion', {
            method: 'POST',
            body: data,
        });

        this.setState({
            res: this.stringifyFormData(data),
        })
    }

    onChangeHandler = (e) => {
        switch (e.target.name) {
            case 'selectedFile':
                if (e.target.files.length > 0) {
                    this.setState({ fileName: e.target.files[0].name });
                }
                break;
            default:
                this.setState({ [e.target.name]: e.target.value });
        }
    }

    render() {
        let { universityValues, classValues, subjectValues, chapterValues, typeValues, probabilityValues, quesTypeValues } = this.state;
        const { res } = this.state;
        console.log("reference" , res);
        return (
            <div>
                <Header />
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <Select name="university" dataParse="dropdown" options={universityValues} label="University" />
                            </div>
                            <div className="col-sm">
                                <Select name="class" dataParse="dropdown" options={classValues} label="Class" />
                            </div>
                        </div>
                        <div className="lineBreak"></div>
                        <div className="row">
                            <div className="col-sm">
                                <Select name="subject" dataParse="dropdown" options={subjectValues} label="Subject" />
                            </div>
                            <div className="col-sm">
                                <Select name="chapter" dataParse="dropdown" options={chapterValues} label="Chapter" />
                            </div>
                        </div>
                        <div className="lineBreak"></div>
                        <div className="row">
                            <div className="col-sm">
                                <Input dataParse="lowercase" onChangeHandler={this.onChangeHandler} type="text" name="title" placeholder="Enter Title" label="Title" boxClass="form-control" className="margin0" />
                            </div>
                        </div>
                        <div className="lineBreak"></div>
                        <div className="row">
                            <div className="col-sm">
                                <TextArea dataParse="lowercase" onChangeHandler={this.onChangeHandler} rows="4" name="reference" className="form-control" placeholder="Enter Reference" label="Reference" />
                            </div>
                        </div>
                        <div className="lineBreak"></div>
                        <div className="row">
                            <div className="col-sm-3">
                                <Select options={typeValues} label="Type" />
                            </div>
                            <div className="col-sm-3">
                                <Input type="text" placeholder="Enter Points" label="Points" boxClass="form-control" className="margin0" />
                            </div>
                            <div className="col-sm-6  radio-wrapper">
                                <label>Probability</label>
                                <Input type="radio" placeholder="Enter Points" label="High" className="margin0" />
                                <Input type="radio" placeholder="Enter Points" label="Medium" className="margin0" />
                                <Input type="radio" placeholder="Enter Points" label="Low" className="margin0" />
                            </div>
                        </div>
                        <div className="lineBreak"></div>
                        <div className="row">
                            <div className="col-sm-3">
                                <Select options={quesTypeValues} label="Question 1" />
                            </div>
                            <div className="col-sm-3">
                                <Select options={quesTypeValues} label="Question 2" />
                            </div>
                            <div className="col-sm-3">
                                <Select options={quesTypeValues} label="Question 3" />
                            </div>
                            <div className="col-sm-3">
                                <Select options={quesTypeValues} label="Question 4" />
                            </div>
                        </div>
                        <div className="lineBreak"></div>
                        <div className="float-right btn-group">
                            <Button
                                handleClick={this.handleClick}
                                name="Cancel"
                                className="secondary-button"
                            />
                            <Button
                                type="submit"
                                name="Save"
                                className="primary-button"
                            />
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}
export default ReferenceQandA;