import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestPokemon } from "./../../actions/pokemon_actions";

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemon[ownProps.match.params.pokeId]
});

const mapDispatchToProps = (dispatch) => ({
  requestSinglePokemon: (id) => dispatch(requestPokemon(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail));