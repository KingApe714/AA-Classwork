/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((module) => {

const APIUtil = {
    followUser: id => {
      // ...
      APIUtil.changeStatus(id, 'POST')
    },
  
    unfollowUser: id => {
      // ...
      APIUtil.changeStatus(id, 'DELETE')
    },

    changeStatus: (id, method) => (
        $.ajax({
            url: `/users/${id}/follow`,
            dataType: 'json',
            method
        })
    )
  };
  
  module.exports = APIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const APIUtil = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js")

class FollowToggle {
    constructor(el) {
        this.$el = $(el)
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');

        this.render();
    }

    render(){
        //choose what the button html texts will be
        if (this.followState === "unfollowed") {
            this.$el.prop('disabled', false)
            this.$el.html("Follow!")
        }
        if (this.followState === "followed") {
            this.$el.prop('disabled', false)
            this.$el.html("Unfollow!")
        }
        if (this.followState === "following") {

        }
        if (this.followState === "unfollowing") {

        }
    }

    //AJAX
    handleClick(event){
        
        event.preventDefault();
        if (this.followState === "Unfollowed"){
            this.followState = 'following'
            APIUtil.followUser(this.userId)
            // $.ajax({
            //     url: '/users/:id/follow',  //need to actually give it the id
            //     type: 'POST',
            //     data: formData,
            //     success() {
            //         console.log('Following!');
            //     }
            // });
            this.followState = 'followed'
        }else{
            this.followState = 'unfollowing'
            APIUtil.unfollowUser(this.userId)
            // $.ajax({
            //     url: '/users/:id/follow', //need to actually give it the id
            //     type: 'POST/DELETE',
            //     data: formData,
            //     success() {
            //         console.log('Unfollowed!');
            //     }
            // });
            this.followState = 'unfollowed'
        }
        this.render();
        
    }
}

module.exports = FollowToggle;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");

__webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");

//The callback should call your constructor once for each button.follow - toggle element.

//grab html elements, no jquery no js until everything is loaded;
//ready state function
//grab all buttons within followToggle class, iterating through all buttons;
//changing them to followToggle objects, now they can call all methods in that class
$(function() {
    $('button.follow-toggle').each(function(index,button){
        new FollowToggle(button); //turn all button into js objects
    })
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map