import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../../utils';

function NoteDetail({ title, createdAt, body }) {
	return (
		<>
			<section className='detail-page'>
				<h3 className='detail-page__title'>{title}</h3>
				<p className='detail-page__createdAt'>{showFormattedDate(createdAt)}</p>
				<div className='detail-page__body'>{body}</div>
			</section>
		</>
	);
}

NoteDetail.propTypes = {
	title: PropTypes.string,
	createdAt: PropTypes.string,
	body: PropTypes.string,
};

export default NoteDetail;
