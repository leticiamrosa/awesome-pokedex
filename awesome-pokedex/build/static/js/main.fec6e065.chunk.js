(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{208:function(e,n,t){e.exports=t(339)},339:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"getGeneration",function(){return pe}),t.d(r,"getGenerationError",function(){return ge}),t.d(r,"showAllGeneration",function(){return he});var a={};t.r(a),t.d(a,"getPokemon",function(){return $e}),t.d(a,"getPokemonError",function(){return en}),t.d(a,"pokemonPagination",function(){return nn}),t.d(a,"updatePokemonPagination",function(){return tn}),t.d(a,"responsePokemonData",function(){return rn}),t.d(a,"getAllPokemons",function(){return an});var o=t(0),i=t.n(o),c=t(22),u=t.n(c),l=t(23),m=t(20),s=t(24),f=t(104),d=t(14),p=Object(d.a)({basename:"/pokedex/awesome-pokedex/"}),g=t(18),h={loading:!0},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_POKEMON":return Object(g.a)({},e,{payload:{loading:!1,pokemon:n.pokemon,image:n.image}});case"GET_POKEMON_ERROR":return Object(g.a)({},e,{payload:{loading:!0,error:n.error}});default:return Object(g.a)({},e)}},y={loading:!0},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SHOW_PAGINATION":return Object(g.a)({},e,{payload:{limit:n.limit+150}});case"GET_POKEMON_ERROR":return Object(g.a)({},e,{payload:{loading:!0,error:n.error}});default:return Object(g.a)({},e)}},E={payload:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_POKEMON":return Object(g.a)({},e,{payload:{loading:!1,generation:n.generation}});case"GET_POKEMON_ERROR":return Object(g.a)({},e,{payload:{loading:!0,error:n.error}});default:return Object(g.a)({},e)}},k=Object(m.c)({pokemon:b,generation:v,pagination:O,router:Object(s.connectRouter)(p)}),j=[Object(s.routerMiddleware)(p),f.a],w=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),G=Object(m.e)(Object(s.connectRouter)(p)(k),Object(m.d)(m.a.apply(void 0,j),w));console.log(G.getState());var P=G,x=t(72),S=t(342),A=t(343),_=t(52),I=t(53),D=t(56),R=t(54),N=t(58),T=t(5),M=t(6),C=t(344),K={primary:"#DC0A2D",secondary:"#0449A8",primaryDarken:"#A80221",secondaryDarken:"#0187D9",secondaryLight:"#039ADA",flying:"#A890F0",bug:"#A8B820",dark:"#705848",eletric:"#F8D030",fairy:"#EE99AC",ghost:"#705898",ice:"#98D8D8",normal:"#A8A878",poison:"#A040A0",rock:"#B8A038",ground:"#E0C068",steel:"#B8B8D0",water:"#6890F0",fighting:"#C03028",psychic:"#F85888",grass:"#78C850",fire:"#F08030",dragon:"#7038F8",light:"#f3f3f3",white:"#fff",grey:"#D9D9D9",coolGrey:"#212121",regular:"#333",shadow:"rgba(223, 234, 235, 0.3)"},V={regular:400,bold:700};t(75);function B(){var e=Object(T.a)(["\n  background-color: ",";\n\n  .navbar-brand {\n    color: ",";\n    font-weight: ",";\n  }\n"]);return B=function(){return e},e}var F=Object(M.a)(C.a)(B(),function(e){return e.background||K.primary},function(e){return e.color||K.white},V.bold),X=function(e){var n=e.title;return i.a.createElement(F,null,i.a.createElement(F.Brand,{href:"#home"},n))},L=t(11);function U(){var e=Object(T.a)(["\n  background: red;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: red;\n  color: white;\n  text-align: center;\n"]);return U=function(){return e},e}function W(){var e=Object(T.a)(["\n  color: ",";\n\n  p {\n    color: ",";\n  }\n\n"]);return W=function(){return e},e}var H=Object(M.a)(L.e)(W(),function(e){return e.color||K.light},K.white),J=Object(M.a)(L.c)(U()),q=function(e){e.params;return i.a.createElement(J,{container:!0},i.a.createElement(L.c,{item:!0,xs:12},i.a.createElement(H,{style:{color:"white"},variant:"body1"},"Made with ",i.a.createElement("span",{role:"img","aria-label":"Emoticon de cora\xe7\xe3o"},"\ufe0f\u2764\ufe0f"))))};function z(){var e=Object(T.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: "," !important;\n\n  p {\n    font-weight: ",";\n    color: "," !important;\n    padding-right: 1em;\n  } \n\n  :hover {\n    transform: scale(1.2);\n    background-color: "," !important;\n  }\n"]);return z=function(){return e},e}function Q(){var e=Object(T.a)(["\n  color: "," !important;\n  padding-top: 0.4em;\n  padding-bottom: 0.4em;\n\n  ::first-letter {\n    text-transform: uppercase !important;\n  }\n  \n  :hover {\n      color: "," !important;\n  }\n"]);return Q=function(){return e},e}var Y={cardPokemon:{height:300,width:200}},Z=Object(M.a)(L.e)(Q(),K.coolGrey,K.light),$=Object(M.a)(L.d)(z(),K.light,V.bold,K.coolGrey,K.primary);function ee(){var e=Object(T.a)([""]);return ee=function(){return e},e}function ne(){var e=Object(T.a)(["\n  flex-grow: 1;\n  min-height: 100vh;\n  background-color: ",";\n  color: ",";\n"]);return ne=function(){return e},e}var te=Object(M.a)(L.c)(ne(),function(e){return e.background||K.coolGrey},function(e){return e.color||K.coolGrey}),re=(M.a.img(ee()),t(341)),ae=function(e){var n=e.generations;e.nextPage;return i.a.createElement(te,{container:!0,justify:"center",alignItems:"center"},n.map(function(e){return e.map(function(e){return i.a.createElement(L.c,{item:!0,xs:12,sm:4,align:"center",key:e},i.a.createElement(L.a,{component:re.a,to:{pathname:"/pokedex",state:{limit:"".concat(e)}}},i.a.createElement($,{style:Y.cardPokemon,elevation:4},i.a.createElement(Z,{align:"center",variant:"title"},e))))})}))};function oe(){var e=Object(T.a)(["\n  color: "," !important;\n"]);return oe=function(){return e},e}function ie(){var e=Object(T.a)([""]);return ie=function(){return e},e}function ce(){var e=Object(T.a)(["\n  flex-grow: 1;\n  min-height: 100vh;\n"]);return ce=function(){return e},e}var ue=Object(M.a)(L.c)(ce()),le=Object(M.a)(L.c)(ie()),me=Object(M.a)(L.b)(oe(),function(e){return e.spinnercolor||K.primary}),se=function(e){var n=e.show,t=e.color;return!!n&&i.a.createElement(ue,{container:!0,justify:"center",alignItems:"center",spacing:16},i.a.createElement(le,{item:!0},i.a.createElement(me,{spinnercolor:t||K.primary})))},fe=function(e){return!!e.show&&e.children},de=["Gera\xe7\xe3o I","Gera\xe7\xe3o II","Gera\xe7\xe3o III","Gera\xe7\xe3o IV","Gera\xe7\xe3o V","Gera\xe7\xe3o VI"];function pe(e){return{type:"GET_POKEMON",generation:e}}function ge(e){return{type:"GET_POKEMON_ERROR",error:e}}function he(){return function(e){e(pe(de))}}var be=function(e){function n(e){var t;return Object(_.a)(this,n),(t=Object(D.a)(this,Object(R.a)(n).call(this,e))).state={loading:!0,generations:[]},t}return Object(N.a)(n,e),Object(I.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.showAllGeneration(),setTimeout(function(){e.showAllGeneration(),e.setState({loading:!1})},500)}},{key:"showAllGeneration",value:function(){var e=this.state.generations,n=this.props.generation;e.push(n.payload.generation)}},{key:"render",value:function(){var e=this.state,n=e.loading,t=e.generations;return i.a.createElement("div",null,i.a.createElement(X,{title:"AwesomePokedex",background:"coral"}),i.a.createElement(te,{container:!0,justify:"center",alignItems:"center"},i.a.createElement(se,{show:n}),i.a.createElement(fe,{show:!n},i.a.createElement(ae,{generations:t})),i.a.createElement(q,null)))}}]),n}(o.Component),ye=Object(l.connect)(function(e){return e},r)(be),Oe=t(45),Ee=t.n(Oe),ve=t(47),ke=t.n(ve),je=t(46),we=t.n(je),Ge=t(48),Pe=t.n(Ge);function xe(){var e=Object(T.a)(["\n  background-color: "," !important;\n  color: "," !important;\n  border-radius: 3px !important;\n  padding-left: 0.8em !important;\n  padding-right: 0.8em !important;\n"]);return xe=function(){return e},e}function Se(){var e=Object(T.a)(["\n  padding-right: 1em;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n"]);return Se=function(){return e},e}function Ae(){var e=Object(T.a)(["\n  background-color: "," !important;\n\n  p {\n    font-weight: ",";\n    color: "," !important;\n    padding-right: 1em;\n  }\n"]);return Ae=function(){return e},e}function _e(){var e=Object(T.a)(["\n  display: flex;\n  justify-content: space-around;\n  padding: 1em;\n"]);return _e=function(){return e},e}function Ie(){var e=Object(T.a)(["\n  color: "," !important;\n  padding-top: 0.4em;\n  padding-bottom: 0.4em;\n\n  ::first-letter {\n    text-transform: uppercase !important;\n  }\n"]);return Ie=function(){return e},e}function De(){var e=Object(T.a)([""]);return De=function(){return e},e}function Re(){var e=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10em;\n  width: 100%;\n  background-color: ",";\n"]);return Re=function(){return e},e}function Ne(){var e=Object(T.a)(["\n  /* position: absolute;  */\n"]);return Ne=function(){return e},e}var Te={root:{flexGrow:1},cardPokemon:{height:300,width:200,margin:16},media:{height:140}},Me=M.a.img(Ne()),Ce=M.a.div(Re(),K.grey),Ke=(Object(M.a)(Ee.a)(De()),Object(M.a)(ke.a)(Ie(),K.coolGrey)),Ve=M.a.div(_e()),Be=Object(M.a)(we.a)(Ae(),K.light,V.bold,K.coolGrey),Fe=M.a.div(Se()),Xe=Object(M.a)(Pe.a)(xe(),function(e){return e.background},K.white),Le=t(37),Ue=t.n(Le),We=function(e){var n=e.pokemons;return i.a.createElement(Ue.a,{align:"center",container:!0,style:Te.root},n.map(function(e){return e.pokemon.map(function(n){return i.a.createElement(Ue.a,{item:!0,xs:12,sm:2,key:n.id},i.a.createElement(Be,{style:Te.cardPokemon,elevation:2},i.a.createElement(Ke,{align:"right",variant:"body1"},"#",n.id),i.a.createElement(Ce,null,i.a.createElement(Me,{src:"".concat(e.image).concat(n.name,".gif")})),i.a.createElement(Ke,{variant:"title"},n.name),i.a.createElement(Ve,null,n.types.map(function(e,n){return i.a.createElement(Xe,{key:n,label:e.type.name,background:"poison"===e.type.name?K.poison:"grass"===e.type.name?K.grass:"bug"===e.type.name?K.bug:"fire"===e.type.name?K.fire:"water"===e.type.name?K.water:"flying"===e.type.name?K.flying:"normal"===e.type.name?K.normal:"ground"===e.type.name?K.ground:"electric"===e.type.name?K.eletric:"fairy"===e.type.name?K.fairy:"fighting"===e.type.name?K.fighting:"psychic"===e.type.name?K.psychic:"rock"===e.type.name?K.rock:"steel"===e.type.name?K.steel:"dragon"===e.type.name?K.dragon:null})})),i.a.createElement(Fe,null)))})}))},He=function(e){var n=e.pokemons;return i.a.createElement("div",null,i.a.createElement(X,{title:"AwesomePokedex"}),i.a.createElement(te,{container:!0},i.a.createElement(We,{pokemons:n}),i.a.createElement(q,null)))},Je=t(71),qe=t.n(Je),ze="https://pokeapi.co/api/v2/pokemon/",Qe="http://pokestadium.com/sprites/xy/",Ye=[],Ze=[];function $e(e,n){return{type:"GET_POKEMON",pokemon:e,image:n}}function en(e){return{type:"GET_POKEMON_ERROR",error:e}}function nn(e){return{type:"SHOW_PAGINATION",limit:e}}function tn(e){return function(n){console.log("estou funcionando"),n(nn(e))}}function rn(e,n){e.data.results.map(function(e){return Ye.push(e.url)}),Ye.forEach(function(e){qe.a.get(e).then(function(e){var t=e.data;Ze.push(t),Ze.sort(function(e,n){return e.id-n.id}),n($e(Ze,Qe))}).catch(function(e){n(en(e))})})}function an(e,n){return function(t){qe.a.get("".concat(ze,"?offset=").concat(e,"&limit=").concat(n)).then(function(e){rn(e,t)}).catch(function(e){t(en(e))})}}var on=function(e){function n(e){var t;return Object(_.a)(this,n),(t=Object(D.a)(this,Object(R.a)(n).call(this,e))).state={loading:!0,imagePokemon:null,allPokemons:[],activePage:1,generation:t.props.location.state.limit,offSet:0,limit:0},t}return Object(N.a)(n,e),Object(I.a)(n,[{key:"componentWillMount",value:function(){var e=this.state.generation;this.whichGenerationShows(e)}},{key:"componentDidMount",value:function(){var e=this,n=this.state,t=n.limit,r=n.offSet;this.props.getAllPokemons(r,t),setTimeout(function(){e.setAllPokemons(),e.setState({loading:!1})},1e3)}},{key:"componentDidUpdate",value:function(){}},{key:"setAllPokemons",value:function(){var e=this.state.allPokemons,n=this.props.pokemon;e.push(n.payload)}},{key:"handleSearchInput",value:function(e){this.setState({search:e.target.value})}},{key:"whichGenerationShows",value:function(e){switch(e){case"Gera\xe7\xe3o I":this.setState({offSet:0,limit:151});break;case"Gera\xe7\xe3o II":this.setState({offSet:151,limit:251});break;case"Gera\xe7\xe3o III":this.setState({offSet:251,limit:351});break;case"Gera\xe7\xe3o IV":this.setState({offSet:351,limit:451});break;case"Gera\xe7\xe3o V":this.setState({offSet:451,limit:551});break;case"Gera\xe7\xe3o VI":this.setState({offSet:551,limit:651});break;default:this.setState({offSet:252,limit:351})}}},{key:"render",value:function(){var e=this.state,n=e.loading,t=e.allPokemons;this.state.activePage;return i.a.createElement(te,null,i.a.createElement(se,{show:n}),i.a.createElement(fe,{show:!n},i.a.createElement(He,{title:"AwesomePokedex",pokemons:t})))}}]),n}(o.Component),cn=Object(l.connect)(function(e){return e},a)(on),un=x.b.div({enter:{opacity:1,delay:300,beforeChildren:!0},exit:{opacity:0}}),ln=function(){return i.a.createElement(s.ConnectedRouter,{history:p},i.a.createElement(S.a,{render:function(e){var n=e.location;return i.a.createElement(x.a,null,i.a.createElement(un,{key:n.pathname},i.a.createElement(A.a,{location:n},i.a.createElement(S.a,{exact:!0,path:"/",render:function(e){return i.a.createElement(ye,Object.assign({},e,{params:"leticia"}))},key:"home"}),i.a.createElement(S.a,{path:"/pokedex",render:function(e){return i.a.createElement(cn,e)},key:"pokedex"}))))}}))},mn=function(){return i.a.createElement(l.Provider,{store:P},i.a.createElement(ln,null))};u.a.render(i.a.createElement(mn,null),document.getElementById("root"))},75:function(e,n){}},[[208,1,2]]]);
//# sourceMappingURL=main.fec6e065.chunk.js.map