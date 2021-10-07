import "./clock1.css";
import moment from "moment";

const Clock1 = () => {
    const dateTime = moment();

    return ( <div className="clock-container">
        <div className="clock">20:11</div>
        <div>
            <div className="date">AUGUST 13,2021</div>
            <div className="day">FRIDAY EVENING</div>
        </div>
    </div>
    );
};

export default Clock1;