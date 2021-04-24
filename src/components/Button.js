import React from 'react';
import * as AiIcons from 'react-icons/ai';

export default function Button({
  color,
  icon,
  size,
  disabled,
  loading = false,
}) {
  const large = { padding: '.5rem 1rem', fontSize: '1rem', lineHeight: '1.5' };
  const medium = {
    padding: '.25rem .5rem',
    fontSize: '.75rem',
    lineHeight: '1.5',
  };
  const small = {
    padding: '.12rem .25rem',
    fontSize: '.5rem',
    lineHeight: '1.5',
  };

  return (
    <div>
      <button
        type="button"
        style={size == 'large' ? large : size == 'small' ? small : medium}
        disabled={disabled ? 'disabled' : ''}
      >
        {/* {loading && (
          <div>
            <i class="fa fa-refresh fa-spin pr5"></i>
            Loading{' '}
          </div>
        )} */}
        {/* {loading ? (
          <div>
            <i class="fa fa-refresh fa-spin pr5"></i>
            Loading{' '}
          </div>
        ) : icon ? (
          <div>
            Clickme
            <AiIcons.AiOutlineArrowRight />
          </div>
        ) : (
          ''
        )} */}
        {!loading || loading == null || loading == false ? (
          <div>
            Clickme
            <AiIcons.AiOutlineArrowRight />
          </div>
        ) : (
          <div>
            <i class="fa fa-refresh fa-spin mr5"></i>
            Loading{' '}
          </div>
        )}
      </button>
    </div>
  );
}

// Button.defaultProps;
