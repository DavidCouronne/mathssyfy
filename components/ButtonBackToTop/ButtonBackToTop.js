export default {
    data: () => ({
        isVisible: false,
        positiony: 0
    }),
    methods: {
        scrollFunction: function() {
            this.postiony = window.scrollY;
            if (this.postiony > 20 ) {
                
              this.isVisible = true;
            }
            else {
              this.isVisible = false;
            }
          },
          scrollToTop: function() {
            document.documentElement.scrollTop  = 0;
            document.body.scrollTop  = 0;
          },
    },
    created: function() {
        window.addEventListener('scroll', this.scrollFunction);
},
}