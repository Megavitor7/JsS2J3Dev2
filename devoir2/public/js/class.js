class Persons{
    constructor(nom,prenom,age){
        this.nom=nom;
        this.prenom=prenom;
        this.age=age;

}
}
class femme extends Persons{
    constructor(nom,prenom,age,email){
        super(nom,prenom,age);
                this.email=email;
        
}
}
export{Persons,femme}