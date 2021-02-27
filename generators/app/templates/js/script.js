/** <%= name %> */
(function(){
    let scr;
  
    function setup() {
        scr = dcl.setupScreen(<%= width %> ,<%= height %> );
        scr.setBgColor('<%= bgColor %>');
        document.body.style.backgroundColor = '<%= bgColor %>';      
    }

    setup();
})();
