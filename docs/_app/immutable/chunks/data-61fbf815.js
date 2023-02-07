const e=()=>Math.floor(Math.random()*10),o=new Array(365).fill().map((n,a)=>{const t=new Date;return t.setDate(t.getDate()-a),{date:t,value:e()}});export{o as d};
