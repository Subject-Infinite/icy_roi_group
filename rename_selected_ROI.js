importClass(Packages.org.fife.ui.rtextarea.ColorBackgroundPainterStrategy)
importClass(Packages.org.fife.ui.rtextarea.ColorBackgroundPainterStrategy)
importClass(Packages.icy.type.collection.array.Array1DUtil)
importClass(Packages.icy.roi.ROIListener)
importClass(Packages.icy.roi.ROI2DPoint)
importClass(Packages.java.awt.geom.Point2D)
importClass(Packages.java.awt.Color)
importClass(Packages.java.util.HashMap)



sequence = getSequence();

if ( sequence == null ) throw "Need a sequence to run";

roiList = sequence.getSelectedROI2Ds();

for ( i=0 ; i<roiList.size() ; i++ )
{
	roi = roiList.get( i );
	roi.setName( "4-d-g-1" );
	roi.setColor(new Color(0.5,0.1,0.1));
	n=sequence.currval;
	print(n);
	//roi.setT(n);
	//roi.setT(sequence.currval)	
}
