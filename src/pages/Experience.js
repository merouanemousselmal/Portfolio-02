import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#333">
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2009 - 2014"
          iconStyle={{ background: "#123456", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Primary School</h3>
          <h4 className="vertical-timeline-element-subtitle">Blida</h4>
          <p>Primary School diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2014 - 2018"
          iconStyle={{ background: "#123456", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">middle school</h3>
          <h4 className="vertical-timeline-element-subtitle">Blida </h4>
          <p>middle school diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2018 - 2021"
          iconStyle={{ background: "#123456", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">high school</h3>
          <h4 className="vertical-timeline-element-subtitle">Blida</h4>
          <p>high school diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2022.06 - 2022.08"
          iconStyle={{ background: "#654895", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            WoordPress web developer{" "}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">algiers</h4>
          <p>making websites with WordPress</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2022 - Present"
          iconStyle={{ background: "#123456", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">University </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Saad Dahlab Blida
          </h4>
          <p>Computer science student</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
