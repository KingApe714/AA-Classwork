const APIUtil = require('./api_util')

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