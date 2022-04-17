import Stack from "@mui/material/Stack";
import React from "react";
import Card from "../../components/Card/Card";

interface ResultsProps {
    resultsValue: string;
    updatePage: any;
    updateDossier: any;
}

interface ResultsState {
    resultsValue: string;
    movies: any;
}

class Results extends React.Component<ResultsProps, ResultsState>  {
    constructor(props: ResultsProps) {
        super(props);
        this.state = {
            resultsValue: props.resultsValue,
            movies: []
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch("./data.json").then((response) => response.json())
        .then((response) => {
            let movies = response.actorMovies[this.state.resultsValue]
            if (movies) {
                this.setState({"movies":movies,});
            } 
        })
    }

    updatePage = (value: string) => {
        this.props.updatePage("dossier")
        this.props.updateDossier(value)
    }

    render() : JSX.Element {
        return(
            <div className="Results-container">
                <div className="Results-Header">
                    {this.state.resultsValue}
                </div>
                <div className="results">
                    <Stack spacing={2}>
                        {
                            this.state.movies.map((value:string) => {
                                return(
                                    <Card className="option-column" key={value}> 
                                        <div onClick={() => this.updatePage(value)}>
                                            {value}
                                        </div>
                                    </Card>
                                )
                            })
                        }
                    </Stack>
                </div>
            </div>
        );
    }
}

export default Results;