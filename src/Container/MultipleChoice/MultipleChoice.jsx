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

class MultipleChoice extends Component {
    constructor() {
        super();
        this.state = {
            universityValues: ["U1", "U2", "U3"],
            classValues: ["C1", "C2", "C3"],
            subjectValues: ["S1", "S2", "S3"],
            chapterValues: ["Ch1", "Ch2", "Ch3"],
            typeValues: ["T1", "T2", "T3"],
            probabilityValues: ["High", "Medium", "Low"],
            answerValues: ["Option1", "Option2", "Option3", "Option4"],
            fileName: '',
        }
    }

    componentDidMount(){
        console.log(this.props.location.state.questionData)
    }


    stringifyFormData=(fd)=> {
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
        fetch('http://myhistoryclass.co.in/sch/api/Questions/InsertQuestion', {
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
        const { universityValues, classValues, subjectValues, chapterValues, typeValues, probabilityValues, answerValues } = this.state,
        questionData = this.props.location.state.questionData,
        { res } = this.state;
        console.log("multiple jjkjjk", res);
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
                                <Input value={questionData.Heading} dataParse="lowercase" onChangeHandler={this.onChangeHandler} type="text" name="title" placeholder="Enter Title" label="Title" boxClass="form-control" className="margin0" />
                            </div>
                        </div>
                        <div className="lineBreak"></div>
                        <div className="row">
                            <div className="col-sm">
                                <TextArea value={questionData.QuestionText} dataParse="lowercase" onChangeHandler={this.onChangeHandler} rows="4" name="question" className="form-control" placeholder="Enter Question" label="Question" />
                            </div>
                        </div>
                        <div className="lineBreak"></div>
                        <div className="row">
                            <div className="col-sm-3">
                                <Select name="type" dataParse="dropdown" options={typeValues} label="Type" />
                            </div>
                            <div className="col-sm-3">
                                <Input value={questionData.Points} dataParse="lowercase" onChangeHandler={this.onChangeHandler} name="points" type="text" placeholder="Enter Points" label="Points" boxClass="form-control" className="margin0" />
                            </div>
                            <div className="col-sm-6  radio-wrapper">
                                <label>Probability</label>
                                <Input type="radio" placeholder="Enter Points" label="High" className="margin0" />
                                <Input type="radio" placeholder="Enter Points" label="Medium" className="margin0" />
                                <Input type="radio" placeholder="Enter Points" label="Low" className="margin0" />
                            </div>
                        </div>
                        <div className="lineBreak"></div>
                        <div className="row selectImage">
                            <div className="col-sm">
                                <Input value={questionData.Option1} id="file-upload-filename" type="text" placeholder="Enter Option1" label="Option1" boxClass="form-control" className="margin0" />
                                <Input type="file" boxClass="image" onChangeHandler={(e) => this.onChangeHandler(e)} className="typeFile" id="imageUpload" accept="image/*" text="imageUpload" label={<i className="fa fa-file-image-o"></i>} />
                            </div>
                            <div className="col-sm">
                                <Input value={questionData.Option2} type="text" placeholder="Enter Option2" label="Option2" boxClass="form-control" className="margin0" />
                                <Input type="file" boxClass="image" onChangeHandler={(e) => this.onChangeHandler(e)} className="typeFile" id="imageUpload" accept="image/*" text="imageUpload" label={<i className="fa fa-file-image-o"></i>} />
                            </div>
                        </div>
                        <div className="lineBreak"></div>
                        <div className="row selectImage">
                            <div className="col-sm">
                                <Input value={questionData.Option3} type="text" placeholder="Enter Option3" label="Option3" boxClass="form-control" className="margin0" />
                                <Input type="file" boxClass="image" onChangeHandler={(e) => this.onChangeHandler(e)} className="typeFile" id="imageUpload" accept="image/*" text="imageUpload" label={<i className="fa fa-file-image-o"></i>} />
                            </div>
                            <div className="col-sm">
                                <Input value={questionData.Option4} type="text" placeholder="Enter Option4" label="Option4" boxClass="form-control" className="margin0" />
                                <Input type="file" boxClass="image" onChangeHandler={(e) => this.onChangeHandler(e)} className="typeFile" id="imageUpload" accept="image/*" text="imageUpload" label={<i className="fa fa-file-image-o"></i>} />
                            </div>
                        </div>
                        <div className="lineBreak"></div>
                        <div className="row">
                            <div className="col-sm-3">
                                <Select name="answer" dataParse="dropdown" options={answerValues} label="Answer" />
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
export default MultipleChoice;