package android.print;

import android.content.Context;
import android.net.Uri;
import android.os.CancellationSignal;
import android.os.Environment;
import android.os.ParcelFileDescriptor;
import android.print.PageRange;
import android.print.PrintAttributes;
import android.print.PrintDocumentAdapter;
import android.print.PrintDocumentInfo;
import android.util.Base64;
import android.util.Log;

import org.apache.cordova.CallbackContext;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

// https://github.com/cesarvr/pdf-generator/issues/9
// http://www.annalytics.co.uk/android/pdf/2017/04/06/Save-PDF-From-An-Android-WebView/
public class PDFtoFile {

    private static final String TAG = PDFtoFile.class.getSimpleName();
    private static final String FILE_NOT_FOUND = "Error: Temp File Not Found";
    private static final String IO_EXCEPTION = "Error: I/O";
    private final PrintAttributes printAttributes;

    private Context ctx;
    private CallbackContext cordovaCallback;
    private File file;
    private String filename;

    public PDFtoFile(PrintAttributes printAttributes, Context ctx, CallbackContext cordovaCallback, String filename) {
        this.printAttributes = printAttributes;
        this.ctx = ctx;
        this.cordovaCallback = cordovaCallback;
        this.filename = (filename.isEmpty() ? "buffer.pdf" : filename);
    }

    public void save() {
        try{
            FileInputStream fileInputStreamReader = new FileInputStream(file);
            byte[] bytes = new byte[(int)file.length()];
            fileInputStreamReader.read(bytes);
            fileInputStreamReader.close();

            cordovaCallback.success(file.getCanonicalPath());

        } catch(FileNotFoundException ex) {
             Log.e(TAG, "save: Error File Not Found: ", ex );
             cordovaCallback.error(FILE_NOT_FOUND);
        } catch(IOException ex) {
             Log.e(TAG, "save: Error in I/O: ", ex );
             cordovaCallback.error(IO_EXCEPTION);
        }
    }

    public void process(final PrintDocumentAdapter printAdapter) {

        final CancellationSignal cancellationSignal = new CancellationSignal();


        final PageRange[] ALL_PAGES_ARRAY = new PageRange[]{PageRange.ALL_PAGES};


        cancellationSignal.setOnCancelListener(new CancellationSignal.OnCancelListener() {
            @Override
            public void onCancel() {
                Log.e(TAG, "onCancel: The action was cancelled");
            }

        });


        final PrintDocumentAdapter.WriteResultCallback myWriteResultCallback = new PrintDocumentAdapter.WriteResultCallback() {

            @Override
            public void onWriteFinished(PageRange[] pages) {
                super.onWriteFinished(pages);
                save();
            }

            @Override
            public void onWriteCancelled() {
                super.onWriteCancelled();

                Log.d(TAG, "onWriteCancelled: Cancelled!!");
            }

            @Override
            public void onWriteFailed(CharSequence error) {
                super.onWriteFailed(error);

                Log.d(TAG, "onWriteFailed: Failed!!! " + error.toString() );
            }
        };

        final PrintDocumentAdapter.LayoutResultCallback myLayoutResultCallback = new PrintDocumentAdapter.LayoutResultCallback() {
            @Override
            public void onLayoutFinished(PrintDocumentInfo info, boolean changed) {

                printAdapter.onWrite(ALL_PAGES_ARRAY, getOutputFile(), cancellationSignal, myWriteResultCallback);
            }

            @Override
            public void onLayoutFailed(CharSequence error) {
                super.onLayoutFailed(error);

                Log.e(TAG, "onLayoutFailed: " + error.toString() );
            }
        };

        printAdapter.onLayout(null, printAttributes, null, myLayoutResultCallback, null);
    }


    private void Test(){


    }

    private ParcelFileDescriptor getOutputFile() {
        try {
            // NOTE: this file is not really temp, it's just easier this way.
            //file = File.createTempFile(Uri.parse(this.filename).getLastPathSegment(), ".pdf", ctx.getFilesDir());
            file = new File(ctx.getExternalFilesDir(""), this.filename);
            if (!file.exists()) {
                file.createNewFile();
            } else {
                file.delete();
                file.createNewFile();
            }
            return ParcelFileDescriptor.open(file, ParcelFileDescriptor.MODE_READ_WRITE);
        } catch (Exception e) {
            Log.e(TAG, "Failed to open ParcelFileDescriptor", e);
        }
        return null;
    }
}