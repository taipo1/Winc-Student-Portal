import { Bar } from "react-chartjs-2";
import React from "react";
import DataStructures from "./../dataStructures";

class MainChart extends React.Component {
  constructor() {
    super();
    this.state = {
      labels: [
        "SCRUM",
        "W1D1-1",
        "W1D2-1",
        "W1D2-2",
        "W1D2-3",
        "W1D2-4",
        "W1D2-5",
        "W1D3-1",
        "W1D3-2",
        "W1D3-4",
        "W1D3-5",
        "W1D3-Project-Guess-the-number",
        "W1D4-1",
        "W1D4-Project-Kleurentoggle",
        "W1D5-Project-Galgje",
        "W2D1-1",
        "W2D1-2",
        "W2D2-1",
        "W2D2-2",
        "W2D2-3",
        "W2D3-1",
        "W2D3-2",
        "W2D3-3",
        "W2D4-1",
        "W2D4-2",
        "W2D4-3",
        "W2D5-Project-Filmzoeker",
        "W3D1-1",
        "W3D1-2",
        "W3D1-3",
        "W3D1-4",
        "W3D2-1",
        "W3D2-2",
        "W3D2-3",
        "W3D3-1",
        "W3D3-2",
        "W3D3-3",
        "W3D3-4",
        "W3D4-1",
        "W3D4-2",
        "W3D5-Project-Todo-List",
        "W4D2-1",
        "W4D2-2",
        "W4D2-3",
        "W4D2-4",
        "W4D3-1",
        "W4D3-2",
        "W4D3-3",
        "W4D3-4",
        "W4D3-5",
        "W4D3-Project-Next-LevelCSS",
        "W5D4-1",
        "W5D5-Project-Lil_Playlist",
        "W6D1-1",
        "W6D2-1",
        "W6D2-Project-Eindopdracht",
      ],
      enjoyment: [],
      difficulty: [],
    };
  }

  setFilteredList = (filteredList) => {
    let enjoymentArray = filteredList.map((item) => item[0]);
    let difficultyArray = filteredList.map((item) => item[1]);
    enjoymentArray.push(0);
    difficultyArray.push(0);
    this.setState(() => {
      return { enjoyment: enjoymentArray, difficulty: difficultyArray };
    });
  };
  componentDidMount() {
    if (this.props.chart.length > 1) {
      this.setFilteredList(
        DataStructures.CalculateAvarageArray(
          DataStructures.combineRatings(this.props.chart)
        )
      );
    } else {
      this.setFilteredList(
        DataStructures.fetchstudentratings(this.props.chart)
      );
    }
  }

  render() {
    const data = {
      labels: this.state.labels,
      datasets: [
        {
          label: "Enjoyment",
          backgroundColor: "#1ea825",
          borderColor: "#1ea825",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(74, 144, 226,0.8)",
          hoverBorderColor: "rgba(74, 144, 226,1)",
          data: this.state.enjoyment,
        },
        {
          label: "Difficulty",
          backgroundColor: "#ff6d00",
          borderColor: "#ff6d00",
          borderWidth: 0.5,
          hoverBackgroundColor: "rgba(74, 144, 226,0.8)",
          hoverBorderColor: "rgba(74, 144, 226,1)",
          data: this.state.difficulty,
        },
      ],
    };
    return (
      <div>
        <Bar
          data={data}
          width={1400}
          height={400}
          options={{
            maintainAspectRatio: true,
          }}
        />
      </div>
    );
  }
}

export default MainChart;
