import { connect } from 'react-redux'
import { StepList } from './step_list'
import { stepsByToID } from '../../reducers/selectors'
import { receiveStep } from '../../actions/step_actions'

const mapDispatchToProps = (dispatch) => {
    return {
        receiveStep: (step) => dispatch(receiveStep(step))
    }
}

const mapStateToProps = (state, { todo_id }) => { //needs to be tested
    return { stepsByToID: stepsByToID(state, todo_id), todo_id: todo_id }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepList)