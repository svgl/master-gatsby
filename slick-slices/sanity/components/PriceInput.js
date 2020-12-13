import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'part:@sanity/components/formfields/default';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

const formatMoney = Intl.NumberFormat('en-us', {
  style: 'currency',
  currency: 'USD',
}).format;

export default function PriceInput({ type, value, onChange }) {
  const title = `${type.title} - ${value ? formatMoney(value / 100) : ''}`;

  return (
    <FormField label={title} description={type.description}>
      <input
        type={type.name}
        value={value === undefined ? '' : value}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
      />
    </FormField>
  );
}

PriceInput.focus = function () {
  this._inputElement.focus();
};

PriceInput.propTypes = {
  type: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
