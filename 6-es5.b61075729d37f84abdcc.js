function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"NW+7":function(e,t,a){"use strict";a.r(t),a.d(t,"FormsModule",(function(){return oe}));var r=a("PCNd"),i=a("tyNb"),n=a("3Pt+"),o=a("fXoL"),c=a("tgey"),l=a("XiUz"),m=a("Wp6s"),b=a("kmnG"),d=a("qFsG"),s=a("d3UM"),p=a("FKr1"),u=a("bTqV"),f=a("ofXK"),g=a("NFeN"),h=a("iadO");function v(e,t){1&e&&(o.Zb(0,"mat-error"),o.Oc(1,"Please enter username "),o.Yb())}function Y(e,t){if(1&e&&(o.Zb(0,"mat-error"),o.Oc(1),o.Yb()),2&e){var a=o.lc();o.Eb(1),o.Qc(" ",a.getErrorMessage(a.reactiveForm1),"")}}function Z(e,t){1&e&&(o.Zb(0,"mat-error"),o.Oc(1,"Please select gender"),o.Yb())}function y(e,t){1&e&&(o.Zb(0,"mat-error"),o.Oc(1,"Please enter city"),o.Yb())}function O(e,t){1&e&&(o.Zb(0,"mat-error"),o.Oc(1,"Please enter address"),o.Yb())}function x(e,t){1&e&&(o.Zb(0,"mat-error"),o.Oc(1,"Please enter company"),o.Yb())}function C(e,t){1&e&&(o.Zb(0,"mat-error"),o.Oc(1,"Please enter mobile"),o.Yb())}function E(e,t){1&e&&(o.Zb(0,"mat-error"),o.Oc(1,"Please enter tele"),o.Yb())}function M(e,t){1&e&&(o.Zb(0,"mat-error"),o.Oc(1,"Please enter website"),o.Yb())}function I(e,t){1&e&&(o.Zb(0,"mat-error"),o.Oc(1,"Please enter website"),o.Yb())}function k(e,t){1&e&&(o.Zb(0,"mat-error"),o.Oc(1,"Please enter username "),o.Yb())}function w(e,t){if(1&e&&(o.Zb(0,"mat-error"),o.Oc(1),o.Yb()),2&e){var a=o.lc();o.Eb(1),o.Qc(" ",a.getErrorMessage(a.reactiveForm2),"")}}function F(e,t){1&e&&(o.Zb(0,"mat-error"),o.Oc(1,"Please select gender "),o.Yb())}function P(e,t){1&e&&(o.Zb(0,"mat-error"),o.Oc(1,"Please enter city"),o.Yb())}function q(e,t){1&e&&(o.Zb(0,"mat-error"),o.Oc(1,"Please enter address "),o.Yb())}function N(e,t){1&e&&(o.Zb(0,"mat-error"),o.Oc(1,"Please enter company "),o.Yb())}function T(e,t){1&e&&(o.Zb(0,"mat-error"),o.Oc(1,"Please enter mobile "),o.Yb())}function S(e,t){1&e&&(o.Zb(0,"mat-error"),o.Oc(1,"Please enter tele"),o.Yb())}function A(e,t){1&e&&(o.Zb(0,"mat-error"),o.Oc(1,"Please enter website "),o.Yb())}function U(e,t){1&e&&(o.Zb(0,"mat-error"),o.Oc(1,"Please enter website "),o.Yb())}var j,R,L=((j=function(){function e(t){_classCallCheck(this,e),this.fb=t,this.q={username:"",email:"",gender:""},this.reactiveForm1=this.fb.group({username:["",[n.x.required]],email:["",[n.x.required,n.x.email]],gender:["",[n.x.required]],city:["",[n.x.required]],address:["",[n.x.required]],company:["",[n.x.required]],mobile:["",[n.x.required]],tele:["",[n.x.required]],website:["",[n.x.required]],date:["",[n.x.required]]}),this.reactiveForm2=this.fb.group({username:["",[n.x.required]],email:["",[n.x.required,n.x.email]],gender:["",[n.x.required]],city:["",[n.x.required]],address:["",[n.x.required]],company:["",[n.x.required]],mobile:["",[n.x.required]],tele:["",[n.x.required]],website:["",[n.x.required]],date:["",[n.x.required]]})}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"getErrorMessage",value:function(e){return e.get("email").hasError("required")?"You must enter a value":e.get("email").hasError("email")?"Not a valid email":""}}]),e}()).\u0275fac=function(e){return new(e||j)(o.Tb(n.f))},j.\u0275cmp=o.Nb({type:j,selectors:[["app-forms-elements"]],decls:179,vars:38,consts:[["fxLayout","row wrap",1,"matero-row"],["fxFlex","100",1,"matero-col"],[1,"m-r-8"],["matInput","","placeholder","Username","name","username",3,"ngModel","ngModelChange"],["matInput","","placeholder","Email","name","email",3,"ngModel","ngModelChange"],["name","gender",3,"ngModel","ngModelChange"],["value","1"],["value","2"],["mat-raised-button","","color","primary"],["fxFlex","33.33","fxFlex.lt-sm","100",1,"matero-col"],[1,"form-field-full",3,"formGroup"],["matInput","","placeholder","Simple placeholder","formControlName","username","required",""],[4,"ngIf"],["matInput","","placeholder","Simple placeholder","formControlName","email","required",""],["required","","formControlName","gender","required",""],["matInput","","placeholder","Simple placeholder","formControlName","city","required",""],["matInput","","placeholder","Simple placeholder","formControlName","address","required",""],["matInput","","placeholder","Simple placeholder","formControlName","company","required",""],["matInput","","placeholder","Simple placeholder","type","number","formControlName","mobile","required",""],["matSuffix",""],["matInput","","placeholder","Simple placeholder","type","number","formControlName","tele","required",""],["matInput","","placeholder","Simple placeholder","formControlName","website","required",""],["matInput","","placeholder","Choose a date","formControlName","date",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["mat-raised-button","","color","primary",1,"m-t-8"],[1,"m-t-16"],["fxFlex","66.67","fxFlex.lt-sm","100",1,"matero-col"],["fxLayout","row wrap","fxLayoutGap","8px grid"],["fxFlex","50","fxFlex.lt-sm","100"],["picker2",""]],template:function(e,t){if(1&e&&(o.Ub(0,"page-header"),o.Zb(1,"div",0),o.Zb(2,"div",1),o.Zb(3,"mat-card"),o.Zb(4,"mat-card-title"),o.Oc(5,"Form Inline"),o.Yb(),o.Zb(6,"form"),o.Zb(7,"mat-form-field",2),o.Zb(8,"input",3),o.hc("ngModelChange",(function(e){return t.q.username=e})),o.Yb(),o.Yb(),o.Zb(9,"mat-form-field",2),o.Zb(10,"input",4),o.hc("ngModelChange",(function(e){return t.q.email=e})),o.Yb(),o.Yb(),o.Zb(11,"mat-form-field",2),o.Zb(12,"mat-label"),o.Oc(13,"Gender"),o.Yb(),o.Zb(14,"mat-select",5),o.hc("ngModelChange",(function(e){return t.q.gender=e})),o.Zb(15,"mat-option"),o.Oc(16,"-- None --"),o.Yb(),o.Zb(17,"mat-option",6),o.Oc(18,"male"),o.Yb(),o.Zb(19,"mat-option",7),o.Oc(20,"female"),o.Yb(),o.Yb(),o.Yb(),o.Zb(21,"button",8),o.Oc(22,"Search"),o.Yb(),o.Yb(),o.Zb(23,"div"),o.Oc(24),o.mc(25,"json"),o.Yb(),o.Yb(),o.Yb(),o.Zb(26,"div",9),o.Zb(27,"mat-card"),o.Zb(28,"mat-card-title"),o.Oc(29,"Form Horizontal"),o.Yb(),o.Zb(30,"form",10),o.Zb(31,"mat-form-field"),o.Zb(32,"mat-label"),o.Oc(33,"Username"),o.Yb(),o.Ub(34,"input",11),o.Mc(35,v,2,0,"mat-error",12),o.Yb(),o.Zb(36,"mat-form-field"),o.Zb(37,"mat-label"),o.Oc(38,"Email"),o.Yb(),o.Ub(39,"input",13),o.Mc(40,Y,2,1,"mat-error",12),o.Yb(),o.Zb(41,"mat-form-field"),o.Zb(42,"mat-label"),o.Oc(43,"Gender"),o.Yb(),o.Zb(44,"mat-select",14),o.Zb(45,"mat-option"),o.Oc(46,"-- None --"),o.Yb(),o.Zb(47,"mat-option",6),o.Oc(48,"male"),o.Yb(),o.Zb(49,"mat-option",7),o.Oc(50,"female"),o.Yb(),o.Yb(),o.Mc(51,Z,2,0,"mat-error",12),o.Yb(),o.Zb(52,"mat-form-field"),o.Zb(53,"mat-label"),o.Oc(54,"City"),o.Yb(),o.Ub(55,"input",15),o.Mc(56,y,2,0,"mat-error",12),o.Yb(),o.Zb(57,"mat-form-field"),o.Zb(58,"mat-label"),o.Oc(59,"Address"),o.Yb(),o.Ub(60,"input",16),o.Mc(61,O,2,0,"mat-error",12),o.Yb(),o.Zb(62,"mat-form-field"),o.Zb(63,"mat-label"),o.Oc(64,"Company"),o.Yb(),o.Ub(65,"input",17),o.Mc(66,x,2,0,"mat-error",12),o.Yb(),o.Zb(67,"mat-form-field"),o.Zb(68,"mat-label"),o.Oc(69,"Mobile"),o.Yb(),o.Ub(70,"input",18),o.Zb(71,"mat-icon",19),o.Oc(72,"smartphone"),o.Yb(),o.Mc(73,C,2,0,"mat-error",12),o.Yb(),o.Zb(74,"mat-form-field"),o.Zb(75,"mat-label"),o.Oc(76,"Tele"),o.Yb(),o.Ub(77,"input",20),o.Zb(78,"mat-icon",19),o.Oc(79,"phone"),o.Yb(),o.Mc(80,E,2,0,"mat-error",12),o.Yb(),o.Zb(81,"mat-form-field"),o.Zb(82,"mat-label"),o.Oc(83,"Website"),o.Yb(),o.Ub(84,"input",21),o.Mc(85,M,2,0,"mat-error",12),o.Yb(),o.Zb(86,"mat-form-field"),o.Ub(87,"input",22),o.Ub(88,"mat-datepicker-toggle",23),o.Ub(89,"mat-datepicker",null,24),o.Mc(91,I,2,0,"mat-error",12),o.Yb(),o.Zb(92,"button",25),o.Oc(93,"Save"),o.Yb(),o.Yb(),o.Zb(94,"div",26),o.Oc(95),o.mc(96,"json"),o.Yb(),o.Yb(),o.Yb(),o.Zb(97,"div",27),o.Zb(98,"mat-card"),o.Zb(99,"mat-card-title"),o.Oc(100,"Form Horizontal"),o.Yb(),o.Zb(101,"form",10),o.Zb(102,"div",28),o.Zb(103,"div",29),o.Zb(104,"mat-form-field"),o.Zb(105,"mat-label"),o.Oc(106,"Username"),o.Yb(),o.Ub(107,"input",11),o.Mc(108,k,2,0,"mat-error",12),o.Yb(),o.Yb(),o.Zb(109,"div",29),o.Zb(110,"mat-form-field"),o.Zb(111,"mat-label"),o.Oc(112,"Email"),o.Yb(),o.Ub(113,"input",13),o.Mc(114,w,2,1,"mat-error",12),o.Yb(),o.Yb(),o.Zb(115,"div",29),o.Zb(116,"mat-form-field"),o.Zb(117,"mat-label"),o.Oc(118,"Gender"),o.Yb(),o.Zb(119,"mat-select",14),o.Zb(120,"mat-option"),o.Oc(121,"-- None --"),o.Yb(),o.Zb(122,"mat-option",6),o.Oc(123,"male"),o.Yb(),o.Zb(124,"mat-option",7),o.Oc(125,"female"),o.Yb(),o.Yb(),o.Mc(126,F,2,0,"mat-error",12),o.Yb(),o.Yb(),o.Zb(127,"div",29),o.Zb(128,"mat-form-field"),o.Zb(129,"mat-label"),o.Oc(130,"City"),o.Yb(),o.Ub(131,"input",15),o.Mc(132,P,2,0,"mat-error",12),o.Yb(),o.Yb(),o.Zb(133,"div",29),o.Zb(134,"mat-form-field"),o.Zb(135,"mat-label"),o.Oc(136,"Address"),o.Yb(),o.Ub(137,"input",16),o.Mc(138,q,2,0,"mat-error",12),o.Yb(),o.Yb(),o.Zb(139,"div",29),o.Zb(140,"mat-form-field"),o.Zb(141,"mat-label"),o.Oc(142,"Company"),o.Yb(),o.Ub(143,"input",17),o.Mc(144,N,2,0,"mat-error",12),o.Yb(),o.Yb(),o.Zb(145,"div",29),o.Zb(146,"mat-form-field"),o.Zb(147,"mat-label"),o.Oc(148,"Mobile"),o.Yb(),o.Ub(149,"input",18),o.Zb(150,"mat-icon",19),o.Oc(151,"smartphone"),o.Yb(),o.Mc(152,T,2,0,"mat-error",12),o.Yb(),o.Yb(),o.Zb(153,"div",29),o.Zb(154,"mat-form-field"),o.Zb(155,"mat-label"),o.Oc(156,"Tele"),o.Yb(),o.Ub(157,"input",20),o.Zb(158,"mat-icon",19),o.Oc(159,"phone"),o.Yb(),o.Mc(160,S,2,0,"mat-error",12),o.Yb(),o.Yb(),o.Zb(161,"div",29),o.Zb(162,"mat-form-field"),o.Zb(163,"mat-label"),o.Oc(164,"Website"),o.Yb(),o.Ub(165,"input",21),o.Mc(166,A,2,0,"mat-error",12),o.Yb(),o.Yb(),o.Zb(167,"div",29),o.Zb(168,"mat-form-field"),o.Ub(169,"input",22),o.Ub(170,"mat-datepicker-toggle",23),o.Ub(171,"mat-datepicker",null,30),o.Mc(173,U,2,0,"mat-error",12),o.Yb(),o.Yb(),o.Yb(),o.Zb(174,"button",25),o.Oc(175,"Save"),o.Yb(),o.Yb(),o.Zb(176,"div",26),o.Oc(177),o.mc(178,"json"),o.Yb(),o.Yb(),o.Yb(),o.Yb()),2&e){var a=o.Bc(90),r=o.Bc(172);o.Eb(8),o.rc("ngModel",t.q.username),o.Eb(2),o.rc("ngModel",t.q.email),o.Eb(4),o.rc("ngModel",t.q.gender),o.Eb(10),o.Pc(o.nc(25,32,t.q)),o.Eb(6),o.rc("formGroup",t.reactiveForm1),o.Eb(5),o.rc("ngIf",t.reactiveForm1.get("username").invalid),o.Eb(5),o.rc("ngIf",t.reactiveForm1.get("email").invalid),o.Eb(11),o.rc("ngIf",t.reactiveForm1.get("gender").invalid),o.Eb(5),o.rc("ngIf",t.reactiveForm1.get("city").invalid),o.Eb(5),o.rc("ngIf",t.reactiveForm1.get("address").invalid),o.Eb(5),o.rc("ngIf",t.reactiveForm1.get("company").invalid),o.Eb(7),o.rc("ngIf",t.reactiveForm1.get("mobile").invalid),o.Eb(7),o.rc("ngIf",t.reactiveForm1.get("tele").invalid),o.Eb(5),o.rc("ngIf",t.reactiveForm1.get("website").invalid),o.Eb(2),o.rc("matDatepicker",a),o.Eb(1),o.rc("for",a),o.Eb(3),o.rc("ngIf",t.reactiveForm1.get("date").invalid),o.Eb(4),o.Pc(o.nc(96,34,t.reactiveForm1.value)),o.Eb(6),o.rc("formGroup",t.reactiveForm2),o.Eb(7),o.rc("ngIf",t.reactiveForm2.get("username").invalid),o.Eb(6),o.rc("ngIf",t.reactiveForm2.get("email").invalid),o.Eb(12),o.rc("ngIf",t.reactiveForm2.get("gender").invalid),o.Eb(6),o.rc("ngIf",t.reactiveForm2.get("city").invalid),o.Eb(6),o.rc("ngIf",t.reactiveForm2.get("address").invalid),o.Eb(6),o.rc("ngIf",t.reactiveForm2.get("company").invalid),o.Eb(8),o.rc("ngIf",t.reactiveForm2.get("mobile").invalid),o.Eb(8),o.rc("ngIf",t.reactiveForm2.get("tele").invalid),o.Eb(6),o.rc("ngIf",t.reactiveForm2.get("website").invalid),o.Eb(3),o.rc("matDatepicker",r),o.Eb(1),o.rc("for",r),o.Eb(3),o.rc("ngIf",t.reactiveForm2.get("date").invalid),o.Eb(4),o.Pc(o.nc(178,36,t.reactiveForm2.value))}},directives:[c.a,l.c,l.a,m.a,m.j,n.y,n.r,n.s,b.c,d.b,n.c,n.q,n.t,b.g,s.a,p.n,u.b,n.k,n.i,n.w,f.o,n.u,g.a,b.i,h.b,h.d,h.a,l.d,b.b],pipes:[f.h],encapsulation:2}),j),G=a("LRne"),z=a("lJxs"),_=a("3E0/"),Q=a("tk/3"),D=((R=function(){function e(t){_classCallCheck(this,e),this.http=t}return _createClass(e,[{key:"getGithubAccounts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e?this.http.get("https://api.github.com/search/users?q=".concat(e)).pipe(Object(z.a)((function(e){return e.items}))):Object(G.a)([])}},{key:"getAlbums",value:function(){return this.http.get("https://jsonplaceholder.typicode.com/albums")}},{key:"getPhotos",value:function(){return this.http.get("https://jsonplaceholder.typicode.com/photos")}},{key:"getPeople",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=[{id:"5a15b13c36e7a7f00cf0d7cb",index:2,isActive:!0,picture:"http://placehold.it/32x32",age:23,name:"Karyn Wright",gender:"female",company:"ZOLAR",email:"karynwright@zolar.com",phone:"+1 (851) 583-2547"},{id:"5a15b13c2340978ec3d2c0ea",index:3,isActive:!1,picture:"http://placehold.it/32x32",age:35,name:"Rochelle Estes",disabled:!0,gender:"female",company:"EXTRAWEAR",email:"rochelleestes@extrawear.com",phone:"+1 (849) 408-2029"},{id:"5a15b13c663ea0af9ad0dae8",index:4,isActive:!1,picture:"http://placehold.it/32x32",age:25,name:"Mendoza Ruiz",gender:"male",company:"ZYTRAX",email:"mendozaruiz@zytrax.com",phone:"+1 (904) 536-2020"},{id:"5a15b13cc9eeb36511d65acf",index:5,isActive:!1,picture:"http://placehold.it/32x32",age:39,name:"Rosales Russell",gender:"male",company:"ELEMANTRA",email:"rosalesrussell@elemantra.com",phone:"+1 (868) 473-3073"},{id:"5a15b13c728cd3f43cc0fe8a",index:6,isActive:!0,picture:"http://placehold.it/32x32",age:32,name:"Marquez Nolan",gender:"male",company:"MIRACLIS",disabled:!0,email:"marqueznolan@miraclis.com",phone:"+1 (853) 571-3921"},{id:"5a15b13ca51b0aaf8a99c05a",index:7,isActive:!1,picture:"http://placehold.it/32x32",age:28,name:"Franklin James",gender:"male",company:"CAXT",email:"franklinjames@caxt.com",phone:"+1 (868) 539-2984"},{id:"5a15b13cc3b9381ffcb1d6f7",index:8,isActive:!1,picture:"http://placehold.it/32x32",age:24,name:"Elsa Bradley",gender:"female",company:"MATRIXITY",email:"elsabradley@matrixity.com",phone:"+1 (994) 583-3850"},{id:"5a15b13ce58cb6ff62c65164",index:9,isActive:!0,picture:"http://placehold.it/32x32",age:40,name:"Pearson Thompson",gender:"male",company:"EZENT",email:"pearsonthompson@ezent.com",phone:"+1 (917) 537-2178"},{id:"5a15b13c90b95eb68010c86e",index:10,isActive:!0,picture:"http://placehold.it/32x32",age:32,name:"Ina Pugh",gender:"female",company:"MANTRIX",email:"inapugh@mantrix.com",phone:"+1 (917) 450-2372"},{id:"5a15b13c2b1746e12788711f",index:11,isActive:!0,picture:"http://placehold.it/32x32",age:25,name:"Nguyen Elliott",gender:"male",company:"PORTALINE",email:"nguyenelliott@portaline.com",phone:"+1 (905) 491-3377"},{id:"5a15b13c605403381eec5019",index:12,isActive:!0,picture:"http://placehold.it/32x32",age:31,name:"Mills Barnett",gender:"male",company:"FARMEX",email:"millsbarnett@farmex.com",phone:"+1 (882) 462-3986"},{id:"5a15b13c67e2e6d1a3cd6ca5",index:13,isActive:!0,picture:"http://placehold.it/32x32",age:36,name:"Margaret Reynolds",gender:"female",company:"ROOFORIA",email:"margaretreynolds@rooforia.com",phone:"+1 (935) 435-2345"},{id:"5a15b13c947c836d177aa85c",index:14,isActive:!1,picture:"http://placehold.it/32x32",age:29,name:"Yvette Navarro",gender:"female",company:"KINETICA",email:"yvettenavarro@kinetica.com",phone:"+1 (807) 485-3824"},{id:"5a15b13c5dbbe61245c1fb73",index:15,isActive:!1,picture:"http://placehold.it/32x32",age:20,name:"Elisa Guzman",gender:"female",company:"KAGE",email:"elisaguzman@kage.com",phone:"+1 (868) 594-2919"},{id:"5a15b13c38fd49fefea8db80",index:16,isActive:!1,picture:"http://placehold.it/32x32",age:33,name:"Jodie Bowman",gender:"female",company:"EMTRAC",email:"jodiebowman@emtrac.com",phone:"+1 (891) 565-2560"},{id:"5a15b13c9680913c470eb8fd",index:17,isActive:!1,picture:"http://placehold.it/32x32",age:24,name:"Diann Booker",gender:"female",company:"LYRIA",email:"diannbooker@lyria.com",phone:"+1 (830) 555-3209"}];return e&&(t=t.filter((function(t){return t.name.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}))),Object(G.a)(t).pipe(Object(_.a)(500))}}]),e}()).\u0275fac=function(e){return new(e||R)(o.dc(Q.b))},R.\u0275prov=o.Pb({token:R,factory:R.\u0275fac}),R),X=a("ZOsW"),W=a("f0Cb");function B(e,t){if(1&e&&(o.Zb(0,"ng-option",15),o.Oc(1),o.Yb()),2&e){var a=t.$implicit;o.rc("value",a.id)("disabled",a.disabled),o.Eb(1),o.Qc(" ",a.name,"")}}function J(e,t){if(1&e&&(o.Zb(0,"b"),o.Oc(1,"create new"),o.Yb(),o.Oc(2)),2&e){var a=t.searchTerm;o.Eb(2),o.Qc(": ",a," ")}}var K,H,V,$,ee=function(){return[]},te=((K=function(){function e(t){_classCallCheck(this,e),this.dataService=t,this.people=[],this.selectedPersonId="5a15b13c36e7a7f00cf0d7cb",this.selectedPersonId2="5a15b13c36e7a7f00cf0d7cb",this.selectedSimpleItem="Two",this.simpleItems=[],this.disable=!0,this.selectedCarId=3,this.cars=[{id:1,name:"Volvo"},{id:2,name:"Saab",disabled:!0},{id:3,name:"Opel"},{id:4,name:"Audi"}],this.companies=[],this.loading=!1,this.companiesNames=["Mi\u0161kas","\u017dalias","Flexigen"],this.selectedCompany="",this.selectedCompanyCustom="",this.selectedCompanyCustomPromise=""}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.people$=this.dataService.getPeople(),this.dataService.getPeople().subscribe((function(t){return e.people=t})),this.simpleItems=[!0,"Two",3],this.companiesNames.forEach((function(t,a){e.companies.push({id:a,name:t})}))}},{key:"toggleDisabled",value:function(){var e=this.cars[1];e.disabled=!e.disabled}},{key:"addTag",value:function(e){return{name:e,tag:!0}}},{key:"addTagPromise",value:function(e){var t=this;return new Promise((function(a){t.loading=!0,setTimeout((function(){a({id:5,name:e,valid:!0}),t.loading=!1}),1e3)}))}}]),e}()).\u0275fac=function(e){return new(e||K)(o.Tb(D))},K.\u0275cmp=o.Nb({type:K,selectors:[["app-forms-selects"]],features:[o.Db([D])],decls:67,vars:43,consts:[["fxLayout","row wrap",1,"matero-row"],["fxFlex","100","fxFlex.gt-sm","50",1,"matero-col"],["bindLabel","name","bindValue","id","autofocus","","placeholder","select person",3,"items","ngModel","ngModelChange"],["inset","",1,"m-y-16"],["bindLabel","name","bindValue","id","placeholder","select person",3,"items","ngModel","ngModelChange"],[3,"items","ngModel","ngModelChange"],["type","button","mat-raised-button","","color","primary",1,"m-b-8",3,"click"],["placeholder","select car",3,"ngModel","ngModelChange"],[3,"value","disabled",4,"ngFor","ngForOf"],[3,"value"],[3,"items","addTag","ngModel","ngModelChange"],["multiple","true","bindLabel","name",3,"items","addTag","hideSelected","ngModel","ngModelChange"],["multiple","true","bindLabel","name",3,"items","addTag","loading","ngModel","ngModelChange"],["ng-tag-tmp",""],[3,"items","addTag","multiple","selectOnTab","isOpen"],[3,"value","disabled"]],template:function(e,t){1&e&&(o.Ub(0,"page-header"),o.Zb(1,"div",0),o.Zb(2,"div",1),o.Zb(3,"mat-card"),o.Zb(4,"mat-card-title"),o.Oc(5,"Data Source"),o.Yb(),o.Zb(6,"div"),o.Zb(7,"p"),o.Oc(8," Most common case is showing data from backend API and with ng-select this is extremely simple since you can bind directly to observable when using angular "),o.Zb(9,"b"),o.Oc(10," | async"),o.Yb(),o.Oc(11," pipe "),o.Yb(),o.Zb(12,"ng-select",2),o.hc("ngModelChange",(function(e){return t.selectedPersonId=e})),o.mc(13,"async"),o.Yb(),o.Oc(14),o.Ub(15,"mat-divider",3),o.Zb(16,"p"),o.Oc(17," You can also set array of objects as items input "),o.Yb(),o.Zb(18,"ng-select",4),o.hc("ngModelChange",(function(e){return t.selectedPersonId2=e})),o.Yb(),o.Oc(19),o.Ub(20,"mat-divider",3),o.Zb(21,"p"),o.Oc(22," While array of objects is the most common items source, you may want to set simple array of strings, numbers, booleans "),o.Yb(),o.Zb(23,"ng-select",5),o.hc("ngModelChange",(function(e){return t.selectedSimpleItem=e})),o.Yb(),o.Oc(24),o.mc(25,"json"),o.Ub(26,"mat-divider",3),o.Zb(27,"p"),o.Oc(28," If you have simple use case, you can omit items array and bind options directly in html using "),o.Zb(29,"b"),o.Oc(30,"ng-option"),o.Yb(),o.Oc(31," component. "),o.Yb(),o.Zb(32,"button",6),o.hc("click",(function(){return t.toggleDisabled()})),o.Oc(33,"Toggle option[1] disabled"),o.Yb(),o.Zb(34,"ng-select",7),o.hc("ngModelChange",(function(e){return t.selectedCarId=e})),o.Mc(35,B,2,3,"ng-option",8),o.Zb(36,"ng-option",9),o.Oc(37,"Custom"),o.Yb(),o.Yb(),o.Oc(38),o.mc(39,"json"),o.Yb(),o.Yb(),o.Yb(),o.Zb(40,"div",1),o.Zb(41,"mat-card"),o.Zb(42,"mat-card-title"),o.Oc(43,"Tags"),o.Yb(),o.Zb(44,"div"),o.Zb(45,"label"),o.Oc(46,"Default tags"),o.Yb(),o.Zb(47,"ng-select",10),o.hc("ngModelChange",(function(e){return t.selectedCompany=e})),o.Yb(),o.Zb(48,"p"),o.Oc(49),o.mc(50,"json"),o.Yb(),o.Ub(51,"mat-divider",3),o.Zb(52,"label"),o.Oc(53,"Custom tags"),o.Yb(),o.Zb(54,"ng-select",11),o.hc("ngModelChange",(function(e){return t.selectedCompanyCustom=e})),o.Yb(),o.Zb(55,"p"),o.Oc(56),o.mc(57,"json"),o.Yb(),o.Ub(58,"mat-divider",3),o.Zb(59,"label"),o.Oc(60,"Server side tags"),o.Yb(),o.Zb(61,"ng-select",12),o.hc("ngModelChange",(function(e){return t.selectedCompanyCustomPromise=e})),o.Mc(62,J,3,1,"ng-template",13),o.Yb(),o.Ub(63,"mat-divider",3),o.Zb(64,"label"),o.Oc(65,"Tagging without dropdown. Press enter to add item"),o.Yb(),o.Ub(66,"ng-select",14),o.Yb(),o.Yb(),o.Yb(),o.Yb()),2&e&&(o.Eb(12),o.rc("items",o.nc(13,31,t.people$))("ngModel",t.selectedPersonId),o.Eb(2),o.Qc(" Selected: ",t.selectedPersonId," "),o.Eb(4),o.rc("items",t.people)("ngModel",t.selectedPersonId2),o.Eb(1),o.Qc(" Selected: ",t.selectedPersonId2," "),o.Eb(4),o.rc("items",t.simpleItems)("ngModel",t.selectedSimpleItem),o.Eb(1),o.Qc(" Selected: ",o.nc(25,33,t.selectedSimpleItem)," "),o.Eb(10),o.rc("ngModel",t.selectedCarId),o.Eb(1),o.rc("ngForOf",t.cars),o.Eb(1),o.rc("value","custom"),o.Eb(2),o.Qc(" Selected car ID: ",o.nc(39,35,t.selectedCarId)," "),o.Eb(9),o.rc("items",o.uc(41,ee))("addTag",!0)("ngModel",t.selectedCompany),o.Eb(2),o.Qc(" Selected value: ",o.nc(50,37,t.selectedCompany)," "),o.Eb(5),o.rc("items",t.companies)("addTag",t.addTag)("hideSelected",!0)("ngModel",t.selectedCompanyCustom),o.Eb(2),o.Qc(" Selected value: ",o.nc(57,39,t.selectedCompanyCustom)," "),o.Eb(5),o.rc("items",t.companies)("addTag",t.addTagPromise)("loading",t.loading)("ngModel",t.selectedCompanyCustomPromise),o.Eb(5),o.rc("items",o.uc(42,ee))("addTag",!0)("multiple",!0)("selectOnTab",!0)("isOpen",!1))},directives:[c.a,l.c,l.a,m.a,m.j,X.a,n.q,n.t,W.a,u.b,f.n,X.d,X.c],pipes:[f.b,f.h],encapsulation:2}),K),ae=a("5eHb"),re=a("0FS3"),ie=[{path:"elements",component:L,data:{title:"Form Elements"}},{path:"ng-select",component:te,data:{title:"Ng Select"}},{path:"dynamic",component:(H=function(){function e(t){_classCallCheck(this,e),this.toastr=t,this.form=new n.j({}),this.model={email:"email@gmail.com"},this.fields=[{key:"text",type:"input",templateOptions:{label:"Text",placeholder:"Type here to see the other field become enabled..."}},{key:"text2",type:"input",templateOptions:{label:"Hey!",placeholder:"This one is disabled if there is no text in the other input"},expressionProperties:{"templateOptions.disabled":"!model.text"}},{key:"email",type:"input",templateOptions:{label:"Email address",placeholder:"Enter email",required:!0}}],this.form2=new n.j({}),this.model2={},this.options={},this.fields2=[{fieldGroupClassName:"row",fieldGroup:[{className:"col-sm-6",type:"input",key:"firstName",templateOptions:{label:"First Name"}},{className:"col-sm-6",type:"input",key:"lastName",templateOptions:{label:"Last Name"},expressionProperties:{"templateOptions.disabled":"!model.firstName"}}]},{fieldGroupClassName:"row",fieldGroup:[{className:"col-sm-6",type:"input",key:"street",templateOptions:{label:"Street"}},{className:"col-sm-3",type:"input",key:"cityName",templateOptions:{label:"City"}},{className:"col-sm-3",type:"input",key:"zip",templateOptions:{type:"number",label:"Zip",max:99999,min:0,pattern:"\\d{5}"}}]},{type:"textarea",key:"otherInput",templateOptions:{label:"Other Input"}},{type:"checkbox",key:"otherToo",templateOptions:{label:"Other Checkbox"}}]}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"submit",value:function(){this.showToast(this.model)}},{key:"submit2",value:function(){this.showToast(this.model2)}},{key:"showToast",value:function(e){this.toastr.success(JSON.stringify(e))}}]),e}(),H.\u0275fac=function(e){return new(e||H)(o.Tb(ae.b))},H.\u0275cmp=o.Nb({type:H,selectors:[["app-forms-dynamic"]],decls:15,vars:10,consts:[[3,"formGroup","ngSubmit"],[3,"form","fields","model"],["mat-raised-button","","color","primary"],[3,"model","fields","options","form"],["mat-raised-button","","color","primary",3,"disabled"]],template:function(e,t){1&e&&(o.Ub(0,"page-header"),o.Zb(1,"mat-card"),o.Zb(2,"mat-card-title"),o.Oc(3,"Simple"),o.Yb(),o.Zb(4,"form",0),o.hc("ngSubmit",(function(){return t.submit()})),o.Ub(5,"formly-form",1),o.Zb(6,"button",2),o.Oc(7,"Submit"),o.Yb(),o.Yb(),o.Yb(),o.Zb(8,"mat-card"),o.Zb(9,"mat-card-title"),o.Oc(10,"Advanced Layout"),o.Yb(),o.Zb(11,"form",0),o.hc("ngSubmit",(function(){return t.submit2()})),o.Ub(12,"formly-form",3),o.Zb(13,"button",4),o.Oc(14,"Submit"),o.Yb(),o.Yb(),o.Yb()),2&e&&(o.Eb(4),o.rc("formGroup",t.form),o.Eb(1),o.rc("form",t.form)("fields",t.fields)("model",t.model),o.Eb(6),o.rc("formGroup",t.form2),o.Eb(1),o.rc("model",t.model2)("fields",t.fields2)("options",t.options)("form",t.form2),o.Eb(1),o.rc("disabled",!t.form2.valid))},directives:[c.a,m.a,m.j,n.y,n.r,n.k,re.e,u.b],encapsulation:2}),H),data:{title:"Dynamic Form"}}],ne=(($=function e(){_classCallCheck(this,e)}).\u0275mod=o.Rb({type:$}),$.\u0275inj=o.Qb({factory:function(e){return new(e||$)},imports:[[i.i.forChild(ie)],i.i]}),$),oe=((V=function e(){_classCallCheck(this,e)}).\u0275mod=o.Rb({type:V}),V.\u0275inj=o.Qb({factory:function(e){return new(e||V)},imports:[[r.a,ne]]}),V)}}]);