import React from "react";
import WidgetHeader from "./widgetHeader.js";
import WidgetChart from "./widgetChart.js";
import WidgetInfo from "./widgetInfo.js";

class Widget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("http://13.232.99.42" + this.props.tag)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error,
          });
        }
      );
  }

  render() {
    let heading = this.prop.tag;
    heading = heading.replace("get_","");
    return (
      <div className="widget">
        <WidgetHeader heading={heading} />
        <WidgetChart />
        <WidgetInfo />
      </div>
    );
  }
}
export default Widget;
