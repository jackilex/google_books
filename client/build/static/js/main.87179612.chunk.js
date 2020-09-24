(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,a){e.exports=a(52)},28:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),i=a.n(r),c=(a(28),a(6)),l=a.n(c),s=a(10),u=a(8),m=function(){return o.a.createElement("nav",{id:"nav",className:"navbar "},o.a.createElement("span",{className:"navbar-brand mb-2 mt-2 h1"},"Your Book Playlist"))},d=function(e){return o.a.createElement("div",{className:"flex-grow-1"},o.a.createElement("label",{htmlFor:"search"},"Search"),o.a.createElement("input",{className:"search",onChange:e.handleSearchChange,type:"text",placeholder:"By Book Title",name:"findbook",value:e.findBook}),o.a.createElement("button",{id:"send",className:"btn btn-success ml-1",type:"button",onClick:function(){return e.handleSubmit()}},"Send"))},f=a(22),h=(a(30),a(56)),p=function(e){var t,a="NA",n="NA";"undefined"!==typeof e.author&&(t=e.author,a=t.join(",")),"undefined"!==typeof e.description&&(n=e.description);var r={title:e.title,author:a,description:n,bookId:e.bookId,image:e.image,link:e.link,publish:e.publish};return o.a.createElement("div",{className:" text-white pb-5 mr-4 mt-5",id:"card"},o.a.createElement("img",{src:e.image,className:"card-img-top",style:{width:"10rem",height:"9rem"},alt:"cover"}),o.a.createElement("div",{id:"card-body",className:"mb-2"},o.a.createElement("p",{id:"p"},o.a.createElement("span",{className:"font-weight-bold"},"TITLE"),":"," ",e.title),o.a.createElement("p",{className:"d-flex flex-wrap"},o.a.createElement("span",{className:"font-weight-bold"}," AUTHOR(S)"),":"," ",e.author," "),o.a.createElement("p",{className:"card-text"},o.a.createElement("span",{className:"font-weight-bold"},"Published"),":"," "," ",e.publish," "),o.a.createElement("div",{id:"button-container"},o.a.createElement(f.a,{id:"popContainer",trigger:o.a.createElement(h.a,{id:"button",className:"btn-warning border-0"},"Read Desctiption"),position:"center"},o.a.createElement("div",{id:"popup"},"DESCRIPTION: ",e.description)),o.a.createElement(h.a,{id:"button",className:"btn-warning border-0",href:e.link,target:"_blank"},"View"),o.a.createElement(h.a,{id:"button",className:"btn-warning border-0",onClick:function(){e.setSaved(r),e.savingBook(r),e.getBook()},target:"_blank"},"Save"))))},v=a(4),b=a.n(v),E=a(5),g=o.a.createContext([]),A=o.a.createContext(),k=o.a.createContext();a(48),a(49);var I=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)([]),c=Object(u.a)(i,2),f=c[0],h=c[1],v=Object(n.useState)({}),I=Object(u.a)(v,2),B=I[0],w=I[1],C=Object(n.useState)([]),O=Object(u.a)(C,2),R=O[0],j=O[1];function N(){return(N=Object(s.a)(l.a.mark((function e(){var t,n,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.trim();case 2:return t=e.sent,e.next=5,b.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(t,"+intitle:").concat(t,"&key=").concat("AIzaSyB-_zBnjWEf3eIqv0P22htCRJIxxhA567Y"));case 5:n=e.sent,(o=n.data).totalItems>0&&(h(o.items),console.log(o.items));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e){b.a.post("/api/book",e).then((function(e){return E.b.success("Book Saved")})).catch((function(e){return E.b.info(e.response.data)}))}function S(){b.a.get("/api/book").then((function(e){j(e.data)})).catch((function(e){return j([])}))}return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://www.googleapis.com/books/v1/volumes?q=react+intitle:react&key=".concat("AIzaSyB-_zBnjWEf3eIqv0P22htCRJIxxhA567Y"));case 2:return t=e.sent,a=t.data,e.next=6,console.log({data:a});case 6:h(a.items);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){S()}),[B]),o.a.createElement("div",null,o.a.createElement(E.a,null),o.a.createElement(g.Provider,{value:R},o.a.createElement(A.Provider,{value:function(e){b.a.delete("/api/book/"+e).then((function(e){console.log(e),E.b.success("book is removed")})).catch((function(e){return console.log(e)}))}},o.a.createElement(k.Provider,{value:function(e){b.a.delete("/api/book/delete/"+e).then((function(e){return E.b.success("Book deleted")})).catch((function(e){return console.log(e)}))}},o.a.createElement(m,null),o.a.createElement("div",{className:"d-flex flex-column "},o.a.createElement("div",{id:"mainContainer",className:""},o.a.createElement("div",{id:"searchContainer"},o.a.createElement(d,{handleSubmit:function(){return N.apply(this,arguments)},handleSearchChange:function(e){var t=e.target.value;r(t)},findBook:a,queryResult:f})),o.a.createElement("div",{className:" testimonial-group d-flex",id:"container"},f.length>0&&f.map((function(e,t){return o.a.createElement(p,{key:t,title:e.volumeInfo.title,author:e.volumeInfo.authors,description:e.volumeInfo.description,bookId:e.id,image:e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:"data:image/png;base64,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",publish:e.volumeInfo.publishedDate,link:e.volumeInfo.previewLink,setSaved:w,saved:B,savingBook:Q,getBook:S,setGetCollection:j})})))),o.a.createElement("div",null,o.a.createElement(p,{getBook:S})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.87179612.chunk.js.map