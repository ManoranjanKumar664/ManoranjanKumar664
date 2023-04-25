class mano<datatype>
{
    datatype d;
    void get(datatype dt)
    {
        d=dt;
    }
    void put()
    {
        System.out.println(d);
    }
};

public class mano01
{
    public static void main(String []args)
    {
        mano<String> m1=new mano<String>();
        m1.get("baskey");
        m1.put();
    }
}