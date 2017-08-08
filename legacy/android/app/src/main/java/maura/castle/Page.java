package maura.castle;

import java.util.List;

/**
 * Created by Admin on 5/9/2016.
 */
public class Page {
    private String title;
    private List<Item> items;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }
}
