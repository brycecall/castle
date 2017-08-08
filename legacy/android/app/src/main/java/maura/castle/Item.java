package maura.castle;




/**
 * Created by Admin on 5/9/2016.
 */
public abstract class Item {
    private String title;
    private Boolean isRequired;
    private Boolean isAnswered;
    private Boolean showItem;
    public abstract Object getContent();

}