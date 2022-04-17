import React from "react";
import Header from "../../components/Header/Header";
import Dossier from "../Dossier/Dossier";
import Results from "../Results/Results";
import Search from "../Search/Search";

interface LandingPageProps {}

interface LandingPageState {
    currentPage: string;
    currentSearchTerm: string;
    currentDossierValue: string;
}

class LandingPage extends React.Component<LandingPageProps, LandingPageState>  {
    constructor(props: LandingPageProps) {
        super(props);
        this.state = {
            currentPage: "search",
            currentSearchTerm: "",
            currentDossierValue: ""
        };
        this.updatePage = this.updatePage.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.updateDossier = this.updateDossier.bind(this);
    }

    updatePage = (newPage: string) => {
        this.setState({"currentPage": newPage});
    }

    updateSearch = (search:string) => {
        this.setState({"currentSearchTerm":search});
    }

    updateDossier = (dossier :string) => {
        this.setState({"currentDossierValue":dossier});
    }

    render() : JSX.Element {
        return(
            <div className="lp-container">
                <Header updatePage={this.updatePage}></Header>
                { this.state.currentPage === "search" && 
                <Search updatePage={this.updatePage} updateSearch={this.updateSearch}/>
                }
                { this.state.currentPage === "results" &&
                    <Results resultsValue={this.state.currentSearchTerm}
                             updatePage={this.updatePage}
                             updateDossier={this.updateDossier}></Results>
                }
                { this.state.currentPage === "dossier" &&
                    <Dossier currentDossierValue={this.state.currentDossierValue}></Dossier>
                }
            </div>

        );
    }
}

export default LandingPage;