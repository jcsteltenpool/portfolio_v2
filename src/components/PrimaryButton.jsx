// import PropTypes from 'prop-types';

export default function PrimaryButton(props) {
    const { buttonText } = props;

    return (
        <button className="button primary-button">
            {buttonText}
        </button>
    ) 
}