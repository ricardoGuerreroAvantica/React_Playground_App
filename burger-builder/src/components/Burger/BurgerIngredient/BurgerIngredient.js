import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredient.css'


class BurgerIngredient extends Component{
    render (){
        let ingredient = null;

        switch ( this.props.type ){
            case( 'bread-bottom' ):
                ingredient = (<div className={styles.BreadBottom}>&nbsp;</div>)
            break;
            case( 'bread-top' ):
                ingredient = (
                    <div className={styles.BreadTop}>&nbsp;
                        <div className={styles.Seeds1}>&nbsp;</div>
                        <div className={styles.Seeds2}>&nbsp;</div>
                    </div>)
            break;
            case( 'meat' ):
                ingredient = <div className={styles.Meat}>&nbsp;</div>
            break;
            case( 'cheese' ):
                ingredient = <div className={styles.Cheese}>&nbsp;</div>
            break;
            case( 'salad' ):
                ingredient = <div className={styles.Salad}>&nbsp;</div>
            break;
            case( 'bacon' ):
                ingredient = <div className={styles.Bacon}>&nbsp;</div>
            break;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;