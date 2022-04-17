import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import React from "react";
import Card from "../../components/Card/Card";

import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";


interface SearchProps {
    updatePage: any;
    updateSearch: any;
}

interface SearchState {
    searchValue: string;
    actors: any;
    genres: any;
    directors: any;
}

class Search extends React.Component<SearchProps, SearchState>  {
    constructor(props: SearchProps) {
        super(props);
        this.state = {
            searchValue: "",
            actors: [],
            genres: [],
            directors:[]
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch("./data.json").then((response) => response.json())
        .then((response) => {
            this.setState({"actors":response.actors, "directors":response.directors});
        })

        fetch("https://hlrjm3w29d.execute-api.us-east-1.amazonaws.com/genres", { method: "GET" }).then((response) => response.json())
        .then((response) => {
            this.setState({"genres":response.genres});
        })
    }

    updatePageFromSearch = (event: any) => {
        this.props.updatePage("results")
        this.props.updateSearch(this.state.searchValue)
    }

    updatePageFromOption = (value: string) => {
        this.props.updatePage("results")
        this.props.updateSearch(value)
    }

    searchChange = (event: any) => {
        this.setState({"searchValue": event.target.value});
    }

    render() : JSX.Element {
        return(
            <div className="search-container">
                <div className="search-component">

                    <label className="search-label">
                        <input className="search-box"  type="text" name="search" placeholder="Search: Movie Title | Genre | Actor | Actress | Director" onChange={this.searchChange}/>
                    </label>
                    <IconButton onClick={this.updatePageFromSearch}>
                        <SearchIcon />
                    </IconButton>

                </div>
                <div className="options-container">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
                        <Grid item xs = {4}>
                            <Stack spacing={2}>
                                <div> Actors </div>
                                {this.state.actors.map((value:string) => {
                                    return(
                                        <Card className="option-column" key={value}> 
                                            <div onClick={() => this.updatePageFromOption(value)}>
                                            {value}
                                            </div>
                                        </Card>
                                    )
                                })}
                            </Stack>
                        </Grid>
                        <Grid item xs = {4}>
                            <Stack spacing={2}>
                                <div> Directors </div>
                                {this.state.directors.map((value:string) => {
                                    return(
                                        <Card className="option-column" key={value}>
                                            <div onClick={() => this.updatePageFromOption(value)}>
                                            {value}
                                            </div>
                                        </Card>
                                    )
                                })}
                            </Stack>
                        </Grid>
                        <Grid item xs = {4}>
                            <Stack spacing={2}>
                                <div> Genres </div>
                                {this.state.genres.map((value:string) => {
                                    return(
                                        <Card className="option-column" key={value}>
                                            <div onClick={() => this.updatePageFromOption(value)}>
                                            {value}
                                            </div>
                                        </Card>
                                    )
                                })}
                            </Stack>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Search;