import ScillsName from '@/components/about/scillsName';
import { withLayout } from '@/layout/layout';
import { useParams } from 'next/navigation';
import React from 'react';

function ScillsItem() {
	const param = useParams();
	return <ScillsName param={param} />;
}

export default withLayout(ScillsItem);
