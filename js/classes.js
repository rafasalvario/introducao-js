
class  Usuario {
    constructor(login, senha) {
        this.login = login;
        this.senha = senha;

    }


    validarLogin(){
        return this.login.toString().includes('@')
        && this.login.toString().includes('.')
        ? 'Login válido'
        : 'Login inválido';
        
    }

}

const usuario1 = new Usuario('rafael@verzel.com.br', ); 
console.log(usuario1.login, usuario1.validarLogin()); 

const usuario2 = new Usuario('João', 'huehue'); 
console.log(usuario2.login, usuario2.validarLogin()); 

class Adminstrador extends Usuario{
    constructor(login, senha, resumoProfissional){
        super(login, senha);
        this.resumoProfissional = resumoProfissional;
    }
}

const administrador1 = new Adminstrador('administrador@admin.com', 'senhaadmin', 'Resumdo do administrador');
console.log(administrador1.login, administrador1.validarLogin());
console.log(usuario2.login, administrador1.validarLogin());
