import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';


const ListViewHandler = (props) => {
    const {details} = props;
    return details && (
        <table className="table table-bordered table-striped qs-table">
            <thead>
                <tr>
                    <th width="5%">Sr.No</th>
                    <th width="10%">Template</th>
                    <th width="55%">Questions</th>
                    <th width="5%">Class</th>
                    <th width="5%">Subject</th>
                    <th width="5%">Chapter</th>
                    <th width="5%"></th>
                </tr>
            </thead>
            <tbody>
                {
                    details.map((detail, index) => {
                        return (
                            <tr key={index}>
                                <td className="text-center">{detail.ID}</td>
                                <td>{detail.Template}</td>
                                <td>{detail.QuestionText}</td>
                                <td>10th</td>
                                <td>Science</td>
                                <td>{detail.ChapterID}</td>
                                <td>
                                    {(() => {
                                        switch (detail.Template) {
                                            case "MCQ":
                                                return <Link to={{
                                                    pathname: '/multipleChoice', 
                                                    state: { questionData: props.questionData[index] } 
                                                }} onClick={() => props.editQuestion(detail, index)}> 
                                                    <i className="fa fa-edit"></i>
                                                </Link>
                                            case "Objective":
                                                return "#00FF00";

                                            case "QA":
                                                return "#0000FF";
                                        }
                                    })()}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}
export default ListViewHandler;