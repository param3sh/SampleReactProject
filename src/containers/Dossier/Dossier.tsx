import React from "react";

interface DossierProps {
    currentDossierValue: string;
}

interface DossierState {
    currentDossierValue: string;
    currentDossier: any;
}

class Dossier extends React.Component<DossierProps, DossierState>  {
    constructor(props: DossierProps) {
        super(props);
        this.state = {
            currentDossierValue: props.currentDossierValue,
            currentDossier: {}
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch("./data.json").then((response) => response.json())
        .then((response) => {
            let movie = response.movieDossier[this.state.currentDossierValue]
            if (movie) {
                this.setState({"currentDossier":movie,});
            } 
        })
    }

    render() : JSX.Element {
        return(
            <div className="Dossier-container">
                <div className="Dossier-Header">
                    {this.state.currentDossierValue}
                </div>
                <div className="Dossier-plot">
                    {this.state.currentDossier.Plot}
                </div>
                <div className="Dossier-director">
                    {this.state.currentDossier.Director}
                </div>
                <div className="Dossier-producer">
                    {this.state.currentDossier.Producer}
                </div>
                <div className="Dossier-starring">
                    {this.state.currentDossier.Starring}
                </div>
                <div className="Dossier-genre">
                    {this.state.currentDossier.Genre}
                </div>
            </div>
        );
    }
}

export default Dossier;