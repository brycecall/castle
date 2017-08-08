package maura.castle;

import java.util.Date;
import java.util.List;

/**
 * Created by Admin on 5/9/2016.
 */
public class Inspection {
    private String name;
    private String title;
    private Date date;
    private List<Section> sections;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public List<Section> getSections() {
        return sections;
    }

    public void setSections(List<Section> sections) {
        this.sections = sections;
    }
}
