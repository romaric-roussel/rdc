import React, { Component } from 'react';
import Select from 'react-select'
import './App.css';
import tableau from'./tableau.json';
import { CSVLink, CSVDownload } from "react-csv";


function Formulaire(props) {
 
  const tab = JSON.stringify(tableau)
  let text = JSON.parse(tab)
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
    return (
    <div>
    <form onSubmit={props.onSubmit}>
    <h1>Formulaire de saisie</h1>
        <p>
            <label>Province</label> :</p>  
            <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={options[0]}
          name="color"
          options={options}
        />
         
        <input type="submit" name="enregistrer" value="Enregistrer"></input>
    </form>
        <input type="Button" name="charger" value="Charger" onClick={props.onClick}></input>
    
   
    
    </div>

    );
  }



class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data:["CodeLocalisation", "CodeProvince","Province", "CodeVille","Ville", "CodeCommuneUrbaine", "Codeterritoire","Territoire","CodeCommuneRural","CommuneRural","CodeSecteur","Secteur","CodeChefferie","Chefferie"]
    }
    //this.handleEnvoyer = this.handleEnvoyer.bind(this);
    
    // or
    //<CSVDownload data={csvData} target="_blank" />;

  }
  
  handleCharger(e) {
    e.preventDefault();
    

    
  } 

    
 
  render() {
    const csvData = [
      ["CodeLocalisation", "CodeProvince","Province", "CodeVille","Ville", "CodeCommuneUrbaine", "Codeterritoire","Territoire","CodeCommuneRural","CommuneRural","CodeSecteur","Secteur","CodeChefferie","Chefferie"],
      ["2", "1","BAS-UELE", "","BUTA", "1", "BABADE","","","","","","",""],
      ["3", "1","BAS-UELE", "","BUTA", "2", "DOBEA","","","","","","",""]

    ];
    return (
     
      <div className="App">
       <Formulaire 
          onClick={this.handleEnvoyer}
       /> 
       <CSVLink data={csvData} separator={"\t"}>Download me</CSVLink>;
      </div>
     
    
    );
  }
}

export default App;

