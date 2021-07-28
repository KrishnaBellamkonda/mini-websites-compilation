/*Right and Left touch should lead the another story*/
const stories = document.querySelector('.stories'); // Selects 
// viewport
const mean = stories.offsetLeft + (stories.clientWidth / 2)

// State
STATE  = {
    current_story:stories.firstElementChild.lastElementChild
}


const ACTIONS = {
    next:"next", 
    prev:"prev"
}

function handleStories(action){
    const story = STATE.current_story;
    const lastItemInUserStory = story.parentNode.firstElementChild;
    const firstItemInUserStory = story.parentNode.lastElementChild;
    const hasNextUserStory = story.parentElement.nextElementSibling;
    const hasPrevUserStory = story.parentElement.previousElementSibling;
    console.log("Next User", hasNextUserStory, "\nPrevious User", hasPrevUserStory);
    if(action==ACTIONS.next){
        if (lastItemInUserStory === story && !hasNextUserStory)
      return
    else if (lastItemInUserStory === story && hasNextUserStory) {
      STATE.current_story = story.parentElement.nextElementSibling.lastElementChild
      story.parentElement.nextElementSibling.scrollIntoView({
        behavior: 'smooth'
      })
    }
    else {
      story.classList.add('seen')
      STATE.current_story = story.previousElementSibling
    }
    } else if(action === ACTIONS.prev) {
        if (firstItemInUserStory === story && !hasPrevUserStory)
          return
        else if (firstItemInUserStory === story && hasPrevUserStory) {
          STATE.current_story = story.parentElement.previousElementSibling.firstElementChild
          story.parentElement.previousElementSibling.scrollIntoView({
            behavior: 'smooth'
          })
        }
        else {
          story.nextElementSibling.classList.remove('seen')
          STATE.current_story = story.nextElementSibling
        }
      }
}

// Event listner for click 
stories.addEventListener('click', (event)=>{
    if (event.target.nodeName !== "ARTICLE") return 
    handleStories(event.clientX > mean? ACTIONS.next : ACTIONS.prev)
})