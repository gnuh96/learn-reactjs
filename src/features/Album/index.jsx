import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList'

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'K-Ballad',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/8/7/d/f87d3ca24d30b418d8b91c6665c48547.jpg'
        },
        {
            id: 2,
            name: 'The Best Of Cover',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/f/6/3/9f638f6cb5b5b67aee94b917fb55d5f4.jpg'
        },
        {
            id: 3,
            name: 'Latin Collabs',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/f/b/3/5fb37f1d9bc514920199d5628aba494d.jpg'
        }
    ];

    return (
        <div>
            <h2>Maybe you will like</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;